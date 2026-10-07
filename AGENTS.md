# Architecture rules

- Preserve the delivery origin of CDN asset URLs during content URL normalisation; custom hosting does not serve Lovable's asset paths.
- Configure incremental card disclosure through section data, leaving other card sections unchanged; retain all records in prerendered HTML for discovery.
- Render source-authoritative publication abstracts as plain text and source images without filters, overlays, or cropping; this preserves archival fidelity.