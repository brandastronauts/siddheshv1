import { sitemapData } from './sitemapData';

/**
 * Build-time static HTML renderer.
 * Converts siteContent page sections into semantic HTML strings
 * for injection into pre-rendered index.html files.
 */

function esc(s) {
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pick(obj, keys) {
  for (const key of keys) {
    const value = obj?.[key];
    if (value !== undefined && value !== null && value !== '') return value;
  }
  return '';
}

function normalizeArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function formatRichText(value) {
  if (value === undefined || value === null || value === '') return '';

  const escaped = esc(String(value));
  const withLinks = escaped.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+|#[^)]+)\)/g,
    '<a href="$2">$1</a>'
  );
  const withBold = withLinks.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return withBold.replace(/\n/g, '<br />');
}

function renderParagraphs(content) {
  if (!content) return '';

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === 'string') return `<p>${formatRichText(item)}</p>`;
        if (typeof item === 'object' && item !== null) {
          const text = pick(item, ['text', 'content', 'body', 'description', 'definition', 'excerpt', 'caption']);
          return text ? `<p>${formatRichText(text)}</p>` : '';
        }
        return '';
      })
      .filter(Boolean)
      .join('\n');
  }

  if (typeof content === 'object') {
    const text = pick(content, ['text', 'content', 'body', 'description', 'definition', 'excerpt', 'caption']);
    return text ? `<p>${formatRichText(text)}</p>` : '';
  }

  return String(content)
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `<p>${formatRichText(part)}</p>`)
    .join('\n');
}

function renderCta(cta) {
  if (!cta || cta.disabled) return '';
  const label = pick(cta, ['label', 'title', 'text']);
  const href = pick(cta, ['href', 'url', 'path', 'link']);
  if (!label || !href) return '';
  return `<a href="${esc(href)}">${esc(label)}</a>`;
}

function renderLinkList(items) {
  const list = normalizeArray(items).filter(Boolean);
  if (!list.length) return '';

  const rows = list
    .map((item) => {
      if (typeof item === 'string') return `<li>${formatRichText(item)}</li>`;

      const label = pick(item, ['label', 'title', 'text', 'name']);
      const href = pick(item, ['href', 'url', 'path', 'link']);
      const description = pick(item, ['description', 'subtitle', 'caption']);
      let content = href ? `<a href="${esc(href)}">${esc(label || href)}</a>` : esc(label);
      if (description) content += ` — ${formatRichText(description)}`;
      return content ? `<li>${content}</li>` : '';
    })
    .filter(Boolean)
    .join('');

  return rows ? `<ul>${rows}</ul>` : '';
}

function renderBullets(items) {
  const list = normalizeArray(items).filter(Boolean);
  if (!list.length) return '';
  return `<ul>${list.map((item) => `<li>${typeof item === 'string' ? formatRichText(item) : formatRichText(pick(item, ['label', 'title', 'text', 'body', 'description']))}</li>`).join('')}</ul>`;
}

function renderKeyValueRows(items) {
  const list = normalizeArray(items).filter(Boolean);
  if (!list.length) return '';
  const rows = list
    .map((item) => {
      const label = pick(item, ['label', 'title', 'name']);
      const value = pick(item, ['value', 'body', 'description', 'text']);
      if (!label && !value) return '';
      return `<dt>${esc(label)}</dt><dd>${formatRichText(value)}</dd>`;
    })
    .filter(Boolean)
    .join('');
  return rows ? `<dl>${rows}</dl>` : '';
}

function renderCardEntry(item) {
  if (!item) return '';

  const eyebrow = pick(item, ['tag', 'status', 'label', 'number']);
  const title = pick(item, ['headline', 'title', 'name', 'term']);
  const subtitle = pick(item, ['subtitle', 'sub', 'meta']);
  const body = pick(item, ['body', 'description', 'text', 'excerpt', 'definition', 'caption', 'note']);
  const statusLine = pick(item, ['statusLine']);
  const href = pick(item, ['href', 'url', 'link']) || item.action?.href || item.button?.href || item.cta?.href;

  let html = '';
  if (eyebrow) html += `<p>${esc(eyebrow)}</p>`;
  if (title) html += `<h3>${esc(title)}</h3>`;
  if (subtitle) html += `<p>${formatRichText(subtitle)}</p>`;
  if (body) html += renderParagraphs(body);
  if (statusLine) html += `<p>${formatRichText(statusLine)}</p>`;
  if (item.details?.length) html += renderBullets(item.details);
  if (item.bullets?.length) html += renderBullets(item.bullets);
  if (item.downloads?.length) html += renderLinkList(item.downloads);
  if (item.links?.length) html += renderLinkList(item.links);
  if (item.socials?.length) html += renderLinkList(item.socials);
  if (item.cta) html += renderCta(item.cta);
  if (item.action) html += renderCta(item.action);
  if (item.button) html += renderCta(item.button);

  if (!html && href) html = `<a href="${esc(href)}">${esc(href)}</a>`;
  if (!html) return '';

  return href && !item.action && !item.button && !item.cta
    ? `<article><a href="${esc(href)}">${html}</a></article>`
    : `<article>${html}</article>`;
}

function renderCardCollection(items) {
  const list = normalizeArray(items).filter(Boolean);
  if (!list.length) return '';
  return list.map(renderCardEntry).filter(Boolean).join('\n');
}

function renderFlexibleTable(headers, rows) {
  const normalizedHeaders = normalizeArray(headers);
  const normalizedRows = normalizeArray(rows);
  if (!normalizedHeaders.length && !normalizedRows.length) return '';

  let html = '<table>';

  if (normalizedHeaders.length) {
    html += '<thead><tr>' + normalizedHeaders
      .map((header) => `<th>${esc(typeof header === 'string' ? header : pick(header, ['label', 'title', 'name']))}</th>`)
      .join('') + '</tr></thead>';
  }

  if (normalizedRows.length) {
    html += '<tbody>' + normalizedRows
      .map((row) => {
        let cells;
        if (Array.isArray(row)) {
          cells = row;
        } else if (row?.label !== undefined && row?.value !== undefined) {
          cells = [row.label, row.value];
        } else {
          cells = row?.cells || row?.values || Object.values(row || {});
        }
        return '<tr>' + cells.map((cell) => `<td>${formatRichText(cell)}</td>`).join('') + '</tr>';
      })
      .join('') + '</tbody>';
  }

  html += '</table>';
  return html;
}

function renderSitemapSection() {
  const labels = {
    core: 'Core Pages',
    governance: 'Governance',
    methodology: 'Methodology',
    publications: 'Publications',
    patents: 'Patents',
    books: 'Books',
    team: 'Team',
    downloads: 'Downloads',
    technical: 'Technical & Archive',
    newsroom: 'Newsroom Subpages',
    legal: 'Legal & Access',
  };

  const grouped = Object.entries(sitemapData)
    .map(([key, items]) => `<section><h2>${esc(labels[key] || key)}</h2>${renderLinkList(items.map((item) => ({ label: item.name, href: item.url })) )}</section>`)
    .join('\n');

  const allRows = Object.values(sitemapData)
    .flat()
    .map((item) => [item.name, item.url, item.status])
    .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`)
    .join('');

  return `${grouped}<section><h2>Page Completion Checklist</h2><table><thead><tr><th>Page</th><th>URL</th><th>Status</th></tr></thead><tbody>${allRows}</tbody></table><p>This checklist ensures navigation integrity. No CTA should point to '#'.</p></section>`;
}

function renderSection(section) {
  if (!section || !section.type) return '';
  const type = section.type;
  const heading = pick(section, ['header', 'heading', 'title', 'sectionName', 'label']);
  const intro = pick(section, ['intro', 'description', 'subtitle', 'subheadline']);
  const body = pick(section, ['body', 'content', 'text']);

  switch (type) {
    case 'hero': {
      const title = pick(section, ['headline', 'heading', 'title']);
      const subtitle = pick(section, ['subheadline', 'subtitle', 'subheading', 'intro']);
      let html = '';
      if (title) html += `<h1>${esc(title)}</h1>`;
      if (subtitle) html += renderParagraphs(subtitle);
      const ctas = [section.primaryCta, section.secondaryCta, section.cta].map(renderCta).filter(Boolean);
      if (ctas.length) html += `<nav>${ctas.join(' ')}</nav>`;
      return html ? `<header>${html}</header>` : '';
    }

    case 'metaStrip':
      return renderKeyValueRows(section.items);

    case 'textBlock':
    case 'highlightBox':
    case 'highlightSection':
    case 'anchorBlock':
    case 'split': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      if (body) html += renderParagraphs(body);
      if (section.left) html += renderSubBlock(section.left);
      if (section.right) html += renderSubBlock(section.right);
      if (section.footer) html += renderParagraphs(section.footer);
      if (section.cta) html += `<p>${renderCta(section.cta)}</p>`;
      return html ? `<section${section.id ? ` id="${esc(section.id)}"` : ''}>${html}</section>` : '';
    }

    case 'cards':
    case 'buttonCards':
    case 'numberedCards':
    case 'libraryCards':
    case 'grid3':
    case 'bento':
    case 'frameworkPapers':
    case 'pillars': {
      const items = section.cards || section.items || section.papers || [];
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      html += renderCardCollection(items);
      if (section.footerNote) html += renderParagraphs(section.footerNote);
      if (section.cta) html += `<p>${renderCta(section.cta)}</p>`;
      return html ? `<section>${html}</section>` : '';
    }

    case 'patentGrid': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      html += renderCardCollection(section.patents);
      return html ? `<section>${html}</section>` : '';
    }

    case 'accordion':
    case 'glossaryAccordion': {
      const items = normalizeArray(section.items || section.faqs);
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      html += items.map((item) => {
        const question = pick(item, ['q', 'question', 'term', 'title', 'label']);
        const answer = pick(item, ['a', 'answer', 'definition', 'content', 'body', 'description']);
        return question || answer ? `<details><summary>${esc(question)}</summary>${renderParagraphs(answer)}</details>` : '';
      }).join('\n');
      if (section.footerCta) html += `<p>${renderCta(section.footerCta)}</p>`;
      return html ? `<section>${html}</section>` : '';
    }

    case 'list':
    case 'checklist':
    case 'downloadList': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      if (body) html += renderParagraphs(body);
      html += renderLinkList(section.items);
      return html ? `<section>${html}</section>` : '';
    }

    case 'logoStrip': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      html += renderLinkList((section.logos || []).map((logo) => ({ label: pick(logo, ['name', 'title', 'label']) || pick(logo, ['alt']), href: pick(logo, ['href', 'url']) })));
      return html ? `<section>${html}</section>` : '';
    }

    case 'toolCards': {
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderCardCollection(section.tools);
      return html ? `<section>${html}</section>` : '';
    }

    case 'tierCards':
    case 'pricing': {
      const items = section.tiers || section.columns || [];
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderCardCollection(items);
      return html ? `<section>${html}</section>` : '';
    }

    case 'twoColumn': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      if (section.left) html += renderSubBlock(section.left);
      if (section.right) html += renderSubBlock(section.right);
      if (section.footer) html += renderParagraphs(section.footer);
      if (section.cta) html += `<p>${renderCta(section.cta)}</p>`;
      return html ? `<section>${html}</section>` : '';
    }

    case 'statsBar': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      html += renderKeyValueRows(section.stats || section.items);
      return html ? `<section>${html}</section>` : '';
    }

    case 'timeline':
    case 'timelineSteps':
    case 'dossierTimeline': {
      const items = section.events || section.steps || section.items || [];
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      html += '<ol>' + normalizeArray(items).map((item) => {
        const label = pick(item, ['date', 'year', 'title', 'label']);
        const description = pick(item, ['description', 'body', 'content', 'text']);
        return `<li>${label ? `<strong>${esc(label)}</strong>` : ''}${description ? ` ${formatRichText(description)}` : ''}</li>`;
      }).join('') + '</ol>';
      return `<section>${html}</section>`;
    }

    case 'relatedCards':
    case 'dossierRelated': {
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderLinkList((section.cards || []).map((card) => ({ label: pick(card, ['title', 'label', 'headline']), href: pick(card, ['href', 'url', 'link']) })));
      return html ? `<section>${html}</section>` : '';
    }

    case 'comparisonTable':
    case 'tableBlock':
    case 'tableSection':
    case 'dossierSpecTable': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      html += renderFlexibleTable(section.headers || section.columns, section.rows || section.data);
      return html ? `<section>${html}</section>` : '';
    }

    case 'downloadButton': {
      const link = renderCta({ label: pick(section, ['label', 'text', 'title']) || 'Download', href: pick(section, ['href', 'url', 'link']) || '#' });
      return `<section>${heading ? `<h2>${esc(heading)}</h2>` : ''}${link}</section>`;
    }

    case 'featuredStories': {
      let html = heading ? `<h2>${esc(heading)}</h2>` : '';
      html += renderCardCollection([section.main, ...(section.side || [])]);
      return html ? `<section>${html}</section>` : '';
    }

    case 'profile':
    case 'profileSection': {
      let html = '';
      const name = pick(section, ['name', 'title']);
      const role = pick(section, ['role', 'jobTitle']);
      const bio = pick(section, ['bio', 'body', 'description']);
      if (name) html += `<h2>${esc(name)}</h2>`;
      if (role) html += `<p>${formatRichText(role)}</p>`;
      if (bio) html += renderParagraphs(bio);
      if (section.email) html += `<p><a href="mailto:${esc(section.email)}">${esc(section.email)}</a></p>`;
      if (section.socials?.length) html += renderLinkList(section.socials);
      return html ? `<section>${html}</section>` : '';
    }

    case 'sitemap':
      return `<section>${renderSitemapSection()}</section>`;

    case 'galleryGrid':
    case 'dossierGallery': {
      const items = section.items || section.images || [];
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      if (body) html += renderParagraphs(body);
      html += normalizeArray(items).map((item) => {
        const title = pick(item, ['title', 'label', 'headline']);
        const tag = pick(item, ['tag']);
        const caption = pick(item, ['caption', 'body', 'description']);
        const alt = pick(item.image || {}, ['alt']);
        let itemHtml = '';
        if (tag) itemHtml += `<p>${esc(tag)}</p>`;
        if (title) itemHtml += `<h3>${esc(title)}</h3>`;
        if (caption) itemHtml += renderParagraphs(caption);
        if (alt) itemHtml += `<p>${esc(alt)}</p>`;
        return itemHtml ? `<figure>${itemHtml}</figure>` : '';
      }).join('');
      if (section.cta) html += `<p>${renderCta(section.cta)}</p>`;
      return html ? `<section>${html}</section>` : '';
    }

    case 'form': {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      if (body) html += renderParagraphs(body);
      if (section.fields?.length) {
        html += '<form><ul>' + section.fields.map((field) => {
          const options = field.options?.length ? ` Options: ${field.options.map((opt) => typeof opt === 'string' ? opt : opt.label).join(', ')}` : '';
          return `<li><strong>${esc(field.label || field.name)}</strong>${field.required ? ' *' : ''}${field.placeholder ? ` — ${esc(field.placeholder)}` : ''}${options}</li>`;
        }).join('') + '</ul>';
        if (section.contactNote) html += renderParagraphs(section.contactNote);
        if (section.submitLabel || section.submit?.label) html += `<p>${esc(section.submitLabel || section.submit?.label)}</p>`;
        html += '</form>';
      }
      return html ? `<section>${html}</section>` : '';
    }

    case 'ticker':
      return section.text ? `<section><p>${formatRichText(section.text)}</p></section>` : '';

    case 'dossierHeader': {
      let html = '';
      if (section.title) html += `<h1>${esc(section.title)}</h1>`;
      if (section.subtitle) html += renderParagraphs(section.subtitle);
      if (section.classification) html += `<p>${esc(section.classification)}</p>`;
      if (section.dataPanel?.length) html += renderKeyValueRows(section.dataPanel);
      return html ? `<header>${html}</header>` : '';
    }

    case 'dossierSection':
    case 'dossierNotice':
    case 'dossierArchiveNotice': {
      let html = '';
      const label = pick(section, ['label', 'number']);
      if (label) html += `<p>${esc(label)}</p>`;
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (body) html += renderParagraphs(body);
      return html ? `<section>${html}</section>` : '';
    }

    case 'dossierQuoteStrip':
      return section.quote ? `<section><blockquote>${formatRichText(section.quote)}</blockquote></section>` : '';

    case 'dossierPrinciples': {
      let html = '';
      const label = pick(section, ['label', 'number']);
      if (label) html += `<p>${esc(label)}</p>`;
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      html += renderCardCollection(section.principles);
      if (section.conclusion) html += renderParagraphs(section.conclusion);
      return html ? `<section>${html}</section>` : '';
    }

    default: {
      let html = '';
      if (heading) html += `<h2>${esc(heading)}</h2>`;
      if (intro) html += renderParagraphs(intro);
      if (body) html += renderParagraphs(body);
      if (section.items?.length) html += renderCardCollection(section.items);
      if (section.cta) html += `<p>${renderCta(section.cta)}</p>`;
      return html ? `<section>${html}</section>` : '';
    }
  }
}

function renderSubBlock(block) {
  if (!block) return '';
  let html = '';
  const heading = pick(block, ['heading', 'title', 'header', 'label']);
  const body = pick(block, ['body', 'content', 'text', 'description']);
  if (heading) html += `<h3>${esc(heading)}</h3>`;
  if (body) html += renderParagraphs(body);
  if (block.items?.length) html += renderCardCollection(block.items);
  if (block.links?.length) html += renderLinkList(block.links);
  if (block.panels?.length) {
    html += block.panels.map((panel) => renderSubBlock(panel)).join('');
  }
  return html;
}

export function renderPageToStaticHtml(page) {
  if (!page) return '';

  const parts = [];
  const hasHero = page.sections?.some((section) => section?.type === 'hero' || section?.type === 'dossierHeader');

  if (!hasHero) {
    const fallbackTitle = page.heroTitle || page.title;
    const fallbackSubtitle = page.heroSubtitle || page.metaDescription;
    if (fallbackTitle) {
      parts.push(`<header><h1>${esc(fallbackTitle)}</h1>${fallbackSubtitle ? renderParagraphs(fallbackSubtitle) : ''}</header>`);
    }
  }

  if (page.sections?.length) {
    parts.push(...page.sections.map(renderSection).filter(Boolean));
  }

  if (page.faqSections?.length) {
    for (const group of page.faqSections) {
      let html = group.title ? `<h2>${esc(group.title)}</h2>` : '';
      html += normalizeArray(group.items).map((item) => {
        const q = pick(item, ['q', 'question', 'title', 'label']);
        const a = pick(item, ['a', 'answer', 'content', 'body', 'description']);
        return `<details><summary>${esc(q)}</summary>${renderParagraphs(a)}</details>`;
      }).join('');
      if (html) parts.push(`<section>${html}</section>`);
    }
  }

  if (!parts.length) return '';
  return `<article>${parts.join('\n')}</article>`;
}
