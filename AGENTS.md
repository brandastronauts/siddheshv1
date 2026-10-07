# Architecture rules

- Preserve the delivery origin of CDN asset URLs during content URL normalisation; custom hosting does not serve Lovable's asset paths.
- Configure incremental card disclosure through section data, leaving other card sections unchanged; retain all records in prerendered HTML for discovery.
- Render source-authoritative publication abstracts as plain text and source images without filters, overlays, or cropping; this preserves archival fidelity.- Generate full paper pages from DOCX sources into src/content/publishedPapers.js (pandoc, verbatim) and register them as siteContent pages using the shared publication template (hero + metaStrip + publishedPaper two-column article with sidebar cards); keeps source fidelity, prerendering and visual consistency.
- Generate dataset landing pages from the datasets DOCX into src/content/publishedDatasets.js (pandoc, verbatim) and register them under /publications/datasets/:slug with the shared publishedPaper template; keeps dataset text identical to the source.
