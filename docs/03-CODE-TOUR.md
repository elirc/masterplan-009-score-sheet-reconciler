# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Scenario selection, table rendering and visible errors; clears the previous table on every change and run. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |
| [public/fixtures.js](../public/fixtures.js) | Small fictional inputs designed to expose important distinctions. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `reconcileScores`. Use this trace as a map: r1 creates p1/Sam with total 4 → r2 creates a different p2/Sam with recorded zero → r3 increases p1 missing count → r4 adds 3 to p2 → r5 creates p3/Lee with a missing score.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding a small pure function.

## Decision: Separate identity from presentation

Two people can share a name. Grouping by participantId preserves that distinction. recordId solves a different problem: accidental duplicate events. One identifier cannot safely stand in for both.

**Review question:** Explain which identifier answers “who?” and which answers “which recorded event?”.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Distinguish missing from zero

A score of zero is an observed result. A missing score is incomplete information. Both contribute zero to the total, but their recorded and missing counts differ, which affects how a reader interprets the summary.

**Review question:** Explain why if(!row.score) would collapse two different facts.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Reject ambiguity instead of guessing

The reference rejects a participant ID with conflicting display names and rejects a duplicate record ID. Another product could choose latest-name or deduplication rules, but that would require an explicit policy. Safe integer checks also apply to the accumulated total.

**Review question:** Choose a different policy only after writing an example that explains it.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), wording and interaction in the browser adapter (`public/app.js`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

No persistence, external integration or general framework is hidden behind these files. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
