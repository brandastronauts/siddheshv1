import { describe, it, expect } from 'vitest';
import siteContent from '../content/siteContent';

const SLUGS = ['becoming-fireflies','growth-needs-as-friendship','biophilia-in-the-classroom','drawing-life','the-dwelling-without-the-dweller','nature-affinity-and-biophilic-cognition-in-childhood','red-for-danger-warmth-for-everything','the-rainbow-has-no-rain','child-parent-research-collaboration','biomimicry-methodology-k10-blue-blocks-canon-project'];

describe('published paper pages', () => {
  const cards = siteContent.pages['/publications'].sections.find((s: any) => s.header === 'Published Records').cards;
  SLUGS.forEach((slug, i) => {
    it(`RP${i + 1} card links internally and page holds full paper`, () => {
      const card = cards.find((c: any) => c.id === `RP${i + 1}`);
      expect(card.cta.href).toBe(`/publications/${slug}`);
      const page = siteContent.pages[`/publications/${slug}`];
      const sec = page.sections.find((s: any) => s.type === 'publishedPaper');
      expect(page.sections[0].type).toBe('hero');
      expect(page.sections[0].headline).toBe(card.headline);
      expect(sec.doiCta.href).toBe(card.doi);
      expect(sec.html).not.toContain('<h1');
      expect(sec.authorsHtml).not.toMatch(/<p>(<strong>)?DOI:/);
      expect(sec.authorsHtml.length).toBeGreaterThan(20);
      expect(sec.html).toContain('id="references"');
      expect(sec.html.length).toBeGreaterThan(25000);
    });
  });
});

describe('PDF-sourced papers keep their own authors and DOIs', () => {
  const sec = (slug: string) => siteContent.pages[`/publications/${slug}`].sections.find((s: any) => s.type === 'publishedPaper');
  it('Child-Parent paper lists only its three authors and SSRN DOI', () => {
    const s = sec('child-parent-research-collaboration');
    expect(s.authorsHtml).toContain('Raunak Sharma');
    expect(s.authorsHtml).not.toContain('Pavan Goyal');
    expect(s.doiCta.href).toBe('https://doi.org/10.2139/ssrn.7575264');
    expect((s.html.match(/<table>/g) || []).length).toBe(8);
  });
  it('Biomimicry K-10 paper lists only its three authors, Zenodo DOI and Figure 1', () => {
    const s = sec('biomimicry-methodology-k10-blue-blocks-canon-project');
    expect(s.authorsHtml).toContain('Munira Hussain Kagalwalla');
    expect(s.authorsHtml).not.toContain('Sreemoyee');
    expect(s.authorsHtml).not.toContain('Raunak');
    expect(s.doiCta.href).toBe('https://doi.org/10.5281/zenodo.23795338');
    expect(s.html).toContain('/papers/biomimicry-methodology-k10-blue-blocks-canon-project/figure-1.jpeg');
    expect((s.html.match(/<table>/g) || []).length).toBe(1);
  });
});
