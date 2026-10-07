import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import CardsSection from '../components/sections/CardsSection';
import siteContent from '../content/siteContent';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../components/common/SmartImage', () => ({ default: () => null }));
vi.mock('../components/common/ExpandableText', () => ({ default: () => null }));
vi.mock('framer-motion', () => ({ motion: { div: ({ children, initial, whileInView, viewport, transition, ...props }: any) => <div {...props}>{children}</div>, p: ({ children, initial, whileInView, viewport, transition, ...props }: any) => <p {...props}>{children}</p> } }));

afterEach(cleanup);

const section = siteContent.pages['/publications'].sections.find((item: any) => item.id === 'publications-list');

describe('Published Records disclosure rules', () => {
  it('prepends RP1 through RP9 before the sixteen existing records', () => {
    expect(section.cards).toHaveLength(25);
    expect(section.cards.slice(0, 9).map((card: any) => card.id)).toEqual(['RP1', 'RP2', 'RP3', 'RP4', 'RP5', 'RP6', 'RP7', 'RP8', 'RP9']);
    expect(section.cards[9].cta.href).toBe('/publications/in-space-authorization-letter');
  });

  it('initially exposes exactly six records', () => {
    render(<MemoryRouter><CardsSection {...section} /></MemoryRouter>);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
  });

  it('reveals six more per click and removes the control at twenty-five', () => {
    render(<MemoryRouter><CardsSection {...section} /></MemoryRouter>);
    for (const count of [12, 18, 24, 25]) {
      fireEvent.click(screen.getByRole('button', { name: section.loadMore.label }));
      expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(count);
    }
    expect(screen.queryByRole('button', { name: section.loadMore.label })).toBeNull();
  });

  it('does not limit other card sections', () => {
    render(<MemoryRouter><CardsSection cards={section.cards} /></MemoryRouter>);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(25);
    expect(screen.queryByRole('button', { name: section.loadMore.label })).toBeNull();
  });
});