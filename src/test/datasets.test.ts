import { describe, expect, it } from 'vitest';
import siteContent from '../content/siteContent';

const sections = siteContent.pages['/publications'].sections;
const idx = sections.findIndex((s: any) => s.id === 'datasets');
const datasets = sections[idx];

describe('Datasets section', () => {
  it('sits directly after Published Records', () => {
    expect(sections[idx - 1].id).toBe('publications-list');
  });

  it('has exactly three cards linking to internal pages', () => {
    expect(datasets.cards.map((c: any) => c.cta.href)).toEqual([
      '/publications/datasets/harmonized-comparative-analysis-of-ecological-imagination',
      '/publications/datasets/do-plants-have-friends',
      '/publications/datasets/the-firefly-design-task',
    ]);
    datasets.cards.forEach((c: any) => expect(c.cta.label).toBe('VIEW DATASET'));
  });

  it('keeps the exact DOIs and offers them as the external access link', () => {
    const dois = ['https://doi.org/10.7910/DVN/8DMD5R', 'https://doi.org/10.5281/zenodo.22026911', 'https://doi.org/10.5281/zenodo.22124612'];
    datasets.cards.forEach((c: any, i: number) => {
      const page = siteContent.pages[c.cta.href];
      const body = page.sections.find((s: any) => s.type === 'publishedPaper');
      expect(body.doiCta).toEqual({ label: 'ACCESS EXTERNAL DATASET', href: dois[i] });
    });
  });

  it('preserves key figures verbatim', () => {
    const html = (slug: string) => siteContent.pages[`/publications/datasets/${slug}`].sections.find((s: any) => s.type === 'publishedPaper').html;
    expect(html('harmonized-comparative-analysis-of-ecological-imagination')).toContain('163-row dataset');
    expect(html('do-plants-have-friends')).toContain('90-record archive');
    expect(html('the-firefly-design-task')).toContain('89 students (ages 3–15)');
  });
});
