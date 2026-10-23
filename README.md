# 60-Day Total Mental Makeover

Standalone Timeless Empowerment Foundation educational digital workbook for ages 14–24. This repository is independent; it is not a submodule or folder in another project.

## Included

- 60 original English lessons across 12 five-day chapters, with objectives, teaching, examples, guided practice, visual sequences, knowledge checks, and reflection prompts.
- Five writing fields per day, optional mood check-ins and accessible chart/table, snapshots, flexible learning agreement, review progress, backup export/restore, local printing, and a self-reported participation certificate.
- 138-page printable PDF: eight front-matter pages, 120 daily pages, ten back-matter pages. Certificate is numbered page 129.
- 10-page facilitator PDF and online guide, eight fictional peer stories, six-slide visual overview, and three comfort-break scripts with device/browser speech.
- Official TEF logo sourced from the owner’s saved `New Timeless Empowerment Logo (Dgital).png`, preserved without alteration.

## Deployment

GitHub: `thtaylor-crypto/60-day-mental-makeover`.
Netlify project: `tef-60-day-mental-makeover`, site ID `74483c3c-ec85-43a0-87da-d9b427183c20`.
Publish directory: `public`. No build command, secrets, database, functions, or paid API are required.
`.netlify/` is ignored so local link state cannot be committed. `.openai/` is ignored and used only for local preview; this repository is not a Sites project.

Only `public/` is deployed. Source scripts and tests remain outside the public directory. Netlify applies the response headers in `netlify.toml`.

## Privacy and boundaries

Entries start in temporary page memory. Optional browser saving uses localStorage and is not encrypted by the workbook. No journal data is posted to a backend. Backups contain private entries. Hosting providers receive ordinary web-request metadata. Device speech is provided by the browser/device and may have its own processing behavior; it is not prerecorded TEF narration.

General education, not medical care, diagnosis, treatment, or a clinically validated intervention. Mood scores do not demonstrate treatment efficacy. Learners may pass, pause, or use fictional examples. Facilitators follow organizational safeguarding and emergency procedures.

## Verification

`npm test` checks curriculum coverage, content structure, backup validation/round-trip, progress counts, and escaping. `node --check public/app.js` checks syntax.

The content builder is `python3 scripts/build-content.py`. The PDF builder is `python3 scripts/build-documents.py` (ReportLab and DejaVu fonts required). The PDFs are committed, so Netlify does not need Python or PDF dependencies.

## Release limits

This is the English educational edition. Spanish parity, approved prerecorded audio, and automated certificate email delivery are not represented as complete. Local certificate printing works without a server. No price, checkout, payment collection, cloud synchronization, or login is configured.

General context sources: NIMH Caring for Your Mental Health, NIH Emotional Wellness Toolkit, and WHO Doing What Matters in Times of Stress. These organizations do not endorse this original curriculum. WHO materials are linked, not reproduced.

## Ownership

Published/Owned by Timeless Empowerment Foundation, a 501(c)(3) nonprofit. Created/Designed by Thornton H. Taylor (Board Member). Structure Designed by Supreme Development Group (SDG). Distributed by Timeless Innovations LLC. © 2026 TEF. All rights reserved.
