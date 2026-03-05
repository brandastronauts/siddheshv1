import { useEffect, useRef } from 'react';

const BASE_URL = 'https://research.blueblocks.in';
const LEGACY_URL_RE = /https:\/\/siddheshv1\.lovable\.app/g;
const SCRIPT_ID = 'bb-jsonld-graph';

/**
 * Injects a single JSON-LD <script> tag into document.head via useEffect.
 */
const JsonLd = ({ nodes }) => {
  const prevPayload = useRef('');

  useEffect(() => {
    console.log('[JsonLd] effect fired, nodes:', nodes?.length || 0);
    
    if (!nodes || nodes.length === 0) {
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
      prevPayload.current = '';
      return;
    }

    const cleaned = nodes
      .filter(n => n != null && typeof n === 'object')
      .map(node => {
        const { '@context': _ctx, ...rest } = node;
        return rest;
      });

    if (cleaned.length === 0) {
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
      prevPayload.current = '';
      return;
    }

    const raw = JSON.stringify(
      { '@context': 'https://schema.org', '@graph': cleaned },
      (key, value) => {
        if (value === undefined || value === null || value === '') return undefined;
        return value;
      }
    );
    const payload = raw.replace(LEGACY_URL_RE, BASE_URL);

    if (payload === prevPayload.current) return;
    prevPayload.current = payload;

    let el = document.getElementById(SCRIPT_ID);
    if (!el) {
      el = document.createElement('script');
      el.id = SCRIPT_ID;
      el.setAttribute('type', 'application/ld+json');
      document.head.appendChild(el);
    }
    el.textContent = payload;
    
    console.log('[JsonLd] injected, length:', payload.length, 'el in head:', document.head.contains(el));
  }, [nodes]);

  // Separate cleanup effect
  useEffect(() => {
    return () => {
      console.log('[JsonLd] cleanup');
      const existing = document.getElementById(SCRIPT_ID);
      if (existing) existing.remove();
      prevPayload.current = '';
    };
  }, []);

  return null;
};

export default JsonLd;
