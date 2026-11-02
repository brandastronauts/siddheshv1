import { build } from 'esbuild';
import path from 'node:path';

// Vite already uses esbuild. Bundle JSON pointers into an in-memory Node module
// without changing the browser's source imports or writing generated source files.
export async function loadPrerenderContent(root = process.cwd()) {
  const result = await build({
    entryPoints: [path.resolve(root, 'src/content/siteContent.js')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
  });
  const output = result.outputFiles?.[0];
  if (!output) throw new Error('prerender-schemas: Content bundle was not generated.');
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(output.text).toString('base64')}`;
  const { default: content } = await import(/* @vite-ignore */ moduleUrl);
  if (!content?.pages?.['/publications']) {
    throw new Error('prerender-schemas: Required /publications content is missing.');
  }
  return content;
}