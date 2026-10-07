import { describe, it, expect } from 'vitest';
import siteContent from '../content/siteContent';

const SLUGS = ['becoming-fireflies','growth-needs-as-friendship','biophilia-in-the-classroom','drawing-life','the-dwelling-without-the-dweller','nature-affinity-and-biophilic-cognition-in-childhood','red-for-danger-warmth-for-everything','the-rainbow-has-no-rain'];

describe('published paper pages', () => {
  const cards = siteContent.pages['/publications'].sections.find((s: any) => s.header === 'Published Records').cards;
  SLUGS.forEach((slug, i) => {
    it(`RP${i + 1} card links internally and page holds full paper`, () => {
      const card = cards.find((c: any) => c.id === `RP${i + 1}`);
      expect(card.cta.href).toBe(`/publications/${slug}`);
      const sec = siteContent.pages[`/publications/${slug}`].sections[0];
      expect(sec.doiCta.href).toBe(card.doi);
      expect((sec.html.match(/<h1/g) || []).length).toBe(1);
      expect(sec.html).toContain('id="references"');
      expect(sec.html.length).toBeGreaterThan(25000);
    });
  });
});
