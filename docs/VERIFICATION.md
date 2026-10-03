# Verification record

[Overview](../README.md) · [Machine-readable evidence](verification.json)

Local reference checks ran on 2026-10-03 with **Node v22.16.0**. The machine-readable record contains the captured output rather than an invented transcript.

## Executable checks

Command: `node --test`. Exit code: **0**. 9 tests passed.

Re-run from this repository with `npm test`. There are no external npm dependencies. The local preview can be started with npm start.

## Browser evidence

- No document horizontal overflow at 1200, 800, 500 and 320 CSS pixels
- First Tab exposes skip link; Enter transfers focus to main
- Same-name people separated; missing counts shown; invalid sheet clears stale totals; empty sheet handled

These checks ran in installed Microsoft Edge through a browser automation harness. No JavaScript page errors were observed. A representative screenshot is saved in images/preview.png. The harness was run from the parent workspace; the reproduction checklist below can be performed without installing that harness.

## Reproduce the important observation yourself

Reconcile the normal fixture, inspect both Sams, then select invalid, duplicate and empty sheets. Explain every total, recorded count and missing count by tracing original rows.

Record viewport, input, expected result and actual result. For interaction failures, verify that correcting the input produces a normal result and does not leave stale error styling or stale output. For a layout failure, distinguish document overflow from an intentionally scrollable table region.

## Limits

These observations cover the listed fixtures and one installed browser. They are not a full cross-browser, accessibility, production-security or performance audit. There is no real external service to validate. Static pages use a lightweight link check in CI; the manual/browser observations remain essential. New stories require new evidence after your changes.

The GitHub Actions workflow runs `npm test` on push and pull request. Its configuration is included; an actual remote success must be verified on GitHub separately. Do not infer it merely from this local report.
