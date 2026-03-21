/**
 * Build-time static HTML renderer.
 * Converts siteContent page sections into semantic HTML strings
 * for injection into pre-rendered index.html files.
 *
 * This ensures full page content is visible in "View Page Source"
 * without JavaScript execution — critical for SEO crawlability.
 *
 * Runs in Node at build time only (no browser APIs).
 */

function esc(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Escape HTML then convert **bold** markers to <strong> */
function bold(s) {
  if (!s) return '';
  return esc(s).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function renderParagraphs(content) {
  if (!content) return '';
  if (Array.isArray(content)) {
    return content
      .map(p => {
        if (typeof p === 'string') return `<p>${bold(p)}</p>`;
        if (typeof p === 'object' && p !== null) {
          const text = p.text || p.content || p.body || '';
          return text ? `<p>${bold(text)}</p>` : '';
        }
        return '';
      })
      .filter(Boolean)
      .join('\n');
  }
  if (typeof content === 'object' && content !== null) {
    const text = content.text || content.content || content.body || '';
    return text ? `<p>${bold(text)}</p>` : '';
  }
  return `<p>${bold(content)}</p>`;
}

function renderCards(cards) {
  if (!cards?.length) return '';
  return cards
    .map(c => {
      const title = c.title || c.label || c.name || '';
      const desc = c.description || c.text || c.body || c.subtitle || '';
      const href = c.href || c.link || c.url || '';
      let inner = title ? `<h3>${esc(title)}</h3>` : '';
      if (desc) inner += `<p>${bold(desc)}</p>`;
      if (href) inner = `<a href="${esc(href)}">${inner}</a>`;
      return `<article>${inner}</article>`;
    })
    .join('\n');
}

function renderSection(section) {
  if (!section || !section.type) return '';
  const t = section.type;

  switch (t) {
    case 'hero': {
      const h = section.headline || section.title || '';
      const sub = section.subtitle || section.intro || '';
      if (!h && !sub) return '';
      return `<header><h1>${esc(h)}</h1>${sub ? `<p>${bold(sub)}</p>` : ''}</header>`;
    }

    case 'textBlock': {
      const heading = section.heading || section.title || '';
      const body = section.body || section.content || section.text || '';
      if (!heading && !body) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderParagraphs(body);
      return `<section>${html}</section>`;
    }

    case 'metaStrip': {
      if (!section.items?.length) return '';
      const items = section.items
        .map(i => {
          let val = esc(i.value || '');
          if (i.href) val = `<a href="${esc(i.href)}">${val}</a>`;
          return `<dt>${esc(i.label || '')}</dt><dd>${val}</dd>`;
        })
        .join('');
      return `<dl>${items}</dl>`;
    }

    case 'cards':
    case 'buttonCards':
    case 'numberedCards':
    case 'tierCards':
    case 'toolCards':
    case 'libraryCards':
    case 'patentGrid':
    case 'frameworkPapers':
    case 'pillars':
    case 'grid3': {
      const heading = section.heading || section.title || '';
      const cards = section.cards || section.items || [];
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderCards(cards);
      return `<section>${html}</section>`;
    }

    case 'accordion':
    case 'glossaryAccordion': {
      const heading = section.heading || section.title || '';
      const items = section.items || section.faqs || [];
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += items
        .map(i => {
          const q = i.question || i.title || i.label || '';
          const a = i.answer || i.content || i.body || '';
          return `<details><summary>${esc(q)}</summary>${renderParagraphs(a)}</details>`;
        })
        .join('\n');
      return `<section>${html}</section>`;
    }

    case 'list':
    case 'checklist':
    case 'downloadList': {
      const heading = section.heading || section.title || '';
      const items = section.items || [];
      if (!heading && !items.length) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html +=
        '<ul>' +
        items
          .map(i => {
            if (typeof i === 'string') return `<li>${bold(i)}</li>`;
            const label = i.title || i.label || i.text || '';
            const href = i.href || i.url || i.link || '';
            const content = href ? `<a href="${esc(href)}">${esc(label)}</a>` : esc(label);
            const desc = i.description || i.subtitle || '';
            return `<li>${content}${desc ? ` &mdash; ${bold(desc)}` : ''}</li>`;
          })
          .join('') +
        '</ul>';
      return `<section>${html}</section>`;
    }

    case 'twoColumn': {
      const heading = section.heading || section.title || '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';

      const left = section.left || {};
      if (left.heading) html += `<h3>${esc(left.heading)}</h3>`;
      const leftBody = left.body || left.content || left.text || '';
      if (leftBody) html += renderParagraphs(leftBody);

      if (section.right?.panels) {
        html += section.right.panels
          .map(p => {
            let pH = p.title ? `<h3>${esc(p.title)}</h3>` : '';
            if (p.content || p.text || p.body)
              pH += renderParagraphs(p.content || p.text || p.body);
            if (p.links) {
              pH +=
                '<ul>' +
                p.links
                  .map(
                    l =>
                      `<li><a href="${esc(l.href || l.url || '')}">${esc(l.label || l.text || '')}</a></li>`
                  )
                  .join('') +
                '</ul>';
            }
            return pH;
          })
          .join('');
      }

      return html ? `<section>${html}</section>` : '';
    }

    case 'split': {
      const heading = section.heading || section.title || '';
      const body = section.body || section.content || section.text || '';
      if (!heading && !body) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderParagraphs(body);
      if (section.cta?.label) {
        const href = section.cta.href || section.cta.url || '#';
        html += `<p><a href="${esc(href)}">${esc(section.cta.label)}</a></p>`;
      }
      return `<section>${html}</section>`;
    }

    case 'statsBar': {
      const stats = section.stats || section.items || [];
      if (!stats.length) return '';
      return (
        '<dl>' +
        stats
          .map(
            s =>
              `<dt>${esc(s.label || '')}</dt><dd>${esc(String(s.value || s.stat || ''))}</dd>`
          )
          .join('') +
        '</dl>'
      );
    }

    case 'highlightBox':
    case 'highlightSection': {
      const heading = section.heading || section.title || '';
      const body = section.body || section.content || section.text || '';
      if (!heading && !body) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderParagraphs(body);
      return `<aside>${html}</aside>`;
    }

    case 'timeline':
    case 'timelineSteps': {
      const heading = section.heading || section.title || '';
      const events = section.events || section.steps || section.items || [];
      if (!heading && !events.length) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html +=
        '<ol>' +
        events
          .map(e => {
            const title = e.title || e.label || e.year || '';
            const desc = e.description || e.content || e.body || '';
            return `<li><strong>${esc(String(title))}</strong>${desc ? ` &mdash; ${bold(desc)}` : ''}</li>`;
          })
          .join('') +
        '</ol>';
      return `<section>${html}</section>`;
    }

    case 'relatedCards': {
      const heading = section.heading || section.title || '';
      const cards = section.cards || section.items || [];
      if (!heading && !cards.length) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html +=
        '<nav><ul>' +
        cards
          .map(c => {
            const title = c.title || c.label || '';
            const href = c.href || c.link || c.url || '';
            return `<li>${href ? `<a href="${esc(href)}">${esc(title)}</a>` : esc(title)}</li>`;
          })
          .join('') +
        '</ul></nav>';
      return `<section>${html}</section>`;
    }

    case 'tableBlock':
    case 'comparisonTable':
    case 'tableSection': {
      const heading = section.heading || section.title || '';
      const headers = section.headers || section.columns || [];
      const rows = section.rows || section.data || [];
      if (!heading && !headers.length && !rows.length) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      if (headers.length || rows.length) {
        html += '<table>';
        if (headers.length) {
          html +=
            '<thead><tr>' +
            headers
              .map(h =>
                `<th>${esc(typeof h === 'string' ? h : h.label || h.title || '')}</th>`
              )
              .join('') +
            '</tr></thead>';
        }
        if (rows.length) {
          html +=
            '<tbody>' +
            rows
              .map(r => {
                const cells = Array.isArray(r)
                  ? r
                  : r.cells || r.values || Object.values(r);
                return (
                  '<tr>' +
                  cells.map(c => `<td>${esc(String(c ?? ''))}</td>`).join('') +
                  '</tr>'
                );
              })
              .join('') +
            '</tbody>';
        }
        html += '</table>';
      }
      return `<section>${html}</section>`;
    }

    case 'downloadButton': {
      const label = section.label || section.text || 'Download';
      const href = section.href || section.url || '#';
      return `<p><a href="${esc(href)}">${esc(label)}</a></p>`;
    }

    case 'featuredStories': {
      const heading = section.heading || section.title || '';
      const stories = section.stories || section.items || section.cards || [];
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderCards(stories);
      return `<section>${html}</section>`;
    }

    case 'anchorBlock': {
      const heading = section.heading || section.title || '';
      const body = section.body || section.content || section.text || '';
      if (!heading && !body) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderParagraphs(body);
      return `<section id="${esc(section.id || '')}">${html}</section>`;
    }

    case 'profileSection':
    case 'profile': {
      const name = section.name || section.title || '';
      const bio = section.bio || section.body || section.description || '';
      const role = section.role || section.jobTitle || '';
      if (!name) return '';
      let html = `<h2>${esc(name)}</h2>`;
      if (role) html += `<p>${esc(role)}</p>`;
      if (bio) html += renderParagraphs(bio);
      return `<section>${html}</section>`;
    }

    // Skip interactive / decorative-only sections
    case 'logoStrip':
    case 'ticker':
    case 'form':
    case 'sitemap':
    case 'galleryGrid':
    case 'pricing':
      return '';

    default: {
      // Generic fallback: extract any heading + body
      const heading = section.heading || section.title || '';
      const body =
        section.body ||
        section.content ||
        section.text ||
        section.description ||
        '';
      if (!heading && !body) return '';
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderParagraphs(body);
      return `<section>${html}</section>`;
    }
  }
}

/**
 * Render an entire page's sections array to a semantic HTML string.
 * @param {object} page – a siteContent.pages[route] object
 * @returns {string} HTML string (empty if nothing to render)
 */
export function renderPageToStaticHtml(page) {
  if (!page?.sections?.length) return '';
  const parts = page.sections.map(renderSection).filter(Boolean);
  if (!parts.length) return '';
  return `<article>${parts.join('\n')}</article>`;
}
