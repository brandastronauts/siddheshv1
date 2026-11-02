# Publications update
- [x] Repair Node-compatible static content loading; regression verified the production prerender hook generates Publications and all detail HTML, with preview route/refresh checks passing and no content/design changes.
- [ ] Verify production dist/publications/index.html after VPS rebuild: automatic build passed, but its dist artifact is not exposed in this workspace; production deployment is outside this task.
- [x] Ingest and verify RP1–RP8 source text and matching images.
- [x] Prepend records without modifying existing records or other sections.
- [x] Add opt-in six-at-a-time Load More.
- [x] Verify data integrity, interactions, images, and desktop/tablet/mobile layouts.
- [ ] Verify final SSRN destination access for RP2, RP4, RP8: external site blocks automated requests with 403; exact DOIs resolve to matching SSRN records.