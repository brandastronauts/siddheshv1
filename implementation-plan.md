# Implementation Plan — Research CMS

This file is the running implementation log for work on `research-cms`.

## Working agreement

- Append a dated entry after each new user request or discussion in this project.
- Record the problem, decisions, files or systems changed, and how the result was checked.
- Keep the current status and outstanding user actions accurate; do not record secrets, credentials, tokens, or private environment values.
- Update this file before finishing each implementation turn. Commit it with related code changes when the user asks for persistent project history.

## Current status — 2026-11-17

- Branch: `research-cms`; latest pushed commit: `983c52f` (`Persist and sort Payload pages by website section`).
- Vercel Production and Preview now use the prepared Payload database `blueblocks_payload`.
- Production deployment for `983c52f` is Ready and aliased to `https://research-cms.vercel.app`.
- All 84 `page-overrides` records in `blueblocks_payload` have a persisted Website Section value; the Pages collection sorts and searches by it.
- All 82 source-backed pages have editable Payload sections. The CMS also has one populated editor-created publication page. `/sitemap-html` is a route alias that renders the editable `/sitemap` content; its extra CMS record is intentionally not treated as a separate page.
- Vercel CLI is installed (`65.17.0`) and authenticated. The Vercel plugin is installed at user scope, and `https://mcp.vercel.com` is configured and OAuth-authenticated in Codex CLI. This agent session still needs a tool reload before Vercel MCP tools become available.
- A React hydration error (#418) appeared on the first deployment in Playwright. The subsequent deployment reported no page errors on `/` or `/publications`.

## Active plan

1. Continue the Vercel agent setup after the Codex tools are reloaded; run the official Vercel MCP documentation search and authenticated team-list checks.
2. If the owner reports an Admin editor or route issue, reproduce it against the live deployment and record the result here.

## Update log

### 2026-11-17 — Continue from handoff and identify missing Home inputs

**Request and finding**

- Continued from `HANDOFF_CODEX.md` on the `research-cms` branch.
- The owner reported that Home had no editable inputs and supplied screenshots. The screenshots showed an empty Page Sections block and a view-mode `Edit` button.
- The live Vercel project had a hidden `MONGODB_DB` setting. Its value could not be read; the handoff said the deployment was still using the old `test` database.
- A read-only sync dry run against `blueblocks_payload` showed the source and existing CMS data were in sync. After deployment, the public Payload API returned eight Home section blocks (`hero`, `grid3`, `cards`, `list`, `libraryCards`, `accordion`, `buttonCards`, `galleryGrid`). No database content write was needed.

**Decisions and implementation**

- Owner explicitly approved setting Vercel Production and Preview `MONGODB_DB` to `blueblocks_payload` and deploying `research-cms`.
- Updated the Payload Page Content help text to explain direct word/paragraph editing and reviewer read-only access.
- Updated the Page collection description to explain that editors click **Edit** (top right), open **Page Content**, and expand a section to edit its fields.
- Committed and pushed the changes; the latest source commit is `0228a9c`.
- Installed the Vercel CLI globally, installed the Vercel plugin at user scope, added the global Vercel MCP endpoint, and completed OAuth after the owner approved in the browser.

**Verification**

- Isolated local `npm run build`: passed; 89 static routes generated.
- Production deploy for `a9794ac`: Ready.
- Playwright against `https://research-cms.vercel.app`: `/` returned 200 with H1 `Children Are the Data`; `/publications` returned 200 with H1 `Publications & Open Science`; `/admin` returned 200.
- Payload API for `/`: returned 200 with eight published sections.
- An earlier browser run reported React error #418 on Home; after the latest deployment, Playwright reported no page errors.
- Codex MCP config reports `vercel` enabled and OAuth-authenticated. The Vercel tools are not available inside the current agent session until its tools are reloaded; the authenticated MCP `search_vercel_documentation` and `list_teams` checks remain.

### 2026-11-17 — Sort the Payload Pages workspace by website section

**Request and finding**

- The owner asked for pages to be organized and sorted by website section so pages can be found, duplicated, and edited.
- The existing `section` column was a virtual display-only value; all 84 CMS documents lacked a stored section label, so a server-side sort could not work reliably.

**Implementation**

- Added shared `sectionOf(pathname)` logic and changed `section` to an indexed, persisted, read-only field.
- Payload now computes the section from the URL path on saves, searches Pages by section, and defaults the list order to section then page name.
- Added `scripts/backfill-page-sections.ts`, which defaults to dry run, only writes missing/blank labels, refuses to overwrite non-empty values, and requires an external EJSON backup before apply.
- Ran the dry run: 84 missing labels, no non-empty conflicts. Applied the additive backfill to `blueblocks_payload`; 84 updated, 0 skipped. Backup is stored outside the repository at `../siddheshv1-db-backups/20261117-page-section-index-0228a9c/page-overrides.ejson`.
- Ran `npm run payload:generate:types` as required after the schema change.

**Verification and status**

- Re-ran backfill dry run: 84 correct, 0 missing, 0 conflicting.
- Isolated production build passed and generated 89 static routes.
- The sorting change is not deployed yet; commit and Vercel verification are the next steps.

### 2026-11-17 — Live progress and ongoing implementation plan

**Request and implementation**

- The owner asked to see the live work and asked for a continuously maintained `implementation-plan.md`.
- Created this root-level file with a dated activity log, active steps, verification status, and the Home editing workflow.
- The owner can follow the live deployment at `https://research-cms.vercel.app`; future work in this project should append a dated note here after each discussion and implementation.

**Verification**

- The follow-up deployment for `0228a9c` completed with status Ready and aliases the production `research-cms.vercel.app` URL.

**Editor workflow**

1. Open `https://research-cms.vercel.app/admin` and sign in.
2. Choose **Pages**, open **Home**, then click **Edit** at the top right.
3. In **Page Content**, expand the section containing the text to edit. Change individual words in a text field or full paragraphs in a textarea; use a blank line between paragraphs.
4. Save the draft, preview it, and publish when ready.

The site does not support click-to-edit directly on the public homepage; text is edited in the Payload section fields.

### 2026-11-17 — Verify editable content across every page

**Request and audit**

- The owner asked to apply the same Payload editing workflow to every page in the CMS.
- Ran the read-only three-way content audit against all 82 source pages, using `b143485` as the seeding baseline. Results: 69 are exactly in sync; 12 retain CMS-only additions; Home retains 25 editor-changed leaves. There are no empty source pages, missing page records, source updates, or conflicts. No page content was overwritten.
- The CMS contains 84 published page records: the 82 source-backed pages, one additional CMS-created publication page, and the `/sitemap-html` alias record. The alias route explicitly renders `/sitemap`; editors should edit the populated `/sitemap` page for sitemap content.

**Implementation and verification**

- The persisted Website Section and default section/name sorting changes are committed as `983c52f` and deployed to Production. The deployment reached Ready and owns the `https://research-cms.vercel.app` alias.
- The live Payload API returns all 84 documents with Website Section values in section order; 83 records have content blocks.
- Checked all 83 populated page URLs against Production; all returned HTTP 200.
- The current agent session has no Playwright browser tool available, so this full-page check used the live API and HTTP responses. Earlier Playwright checks covered Home and Publications.
- Vercel's build completed despite the npm configuration/deprecation notices and the Payload warning that the Media collection has no Vercel storage adapter. Media upload storage remains a separate follow-up if editors need to upload files in production.
