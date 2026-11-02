// @vitest-environment node
import { afterAll, describe, expect, it } from 'vitest';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { loadPrerenderContent } from '../../scripts/loadPrerenderContent';
import { prerenderSchemasPlugin } from '../../vite.config';
import { renderPageToStaticHtml } from '../lib/staticHtmlRenderer.js';

let outputDirectory: string | undefined;
afterAll(async () => {
  if (outputDirectory) await rm(outputDirectory, { recursive: true, force: true });
});

describe('Node-compatible static route generation', () => {
  it('loads JSON pointers and generates Publications plus every existing detail route', async () => {
    const content = await loadPrerenderContent();
    outputDirectory = await mkdtemp(path.join(tmpdir(), 'publications-prerender-'));
    // Exercise the real production closeBundle hook, not a replacement renderer.
    const template = await readFile(path.resolve('index.html'), 'utf8');
    await writeFile(path.join(outputDirectory, 'index.html'), template);
    await prerenderSchemasPlugin(outputDirectory).closeBundle();

    const publicationHtml = await readFile(path.join(outputDirectory, 'publications/index.html'), 'utf8');
    const expected = renderPageToStaticHtml(content.pages['/publications'], '/publications');
    expect(expected.length).toBeGreaterThan(1000);
    expect(publicationHtml).toContain(`<div id="root">${expected}</div>`);
    expect(publicationHtml).not.toBe(await readFile(path.join(outputDirectory, 'index.html'), 'utf8'));

    const detailRoutes = Object.keys(content.pages).filter(route => route.startsWith('/publications/'));
    expect(detailRoutes.length).toBeGreaterThanOrEqual(13);
    for (const route of detailRoutes) {
      const generated = await readFile(path.join(outputDirectory, route.slice(1), 'index.html'), 'utf8');
      expect(generated).toContain(`<div id="root">${renderPageToStaticHtml(content.pages[route], route)}</div>`);
    }
  }, 30000);
});