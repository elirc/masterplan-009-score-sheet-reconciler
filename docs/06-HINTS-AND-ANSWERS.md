# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add an average of recorded scores

**Hint 1 — ownership:** Begin from `reconcileScores`. Derive average from total and recorded count without treating missing as zero-valued attempts.

**Hint 2 — reasoning:** Revisit the decision “Separate identity from presentation”. Ask yourself: Explain which identifier answers “who?” and which answers “which recorded event?”.

**Answer direction:** A defensible solution demonstrates this observable result: A participant with no recorded scores has an explicit no-average state. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Sort summaries by total

**Hint 1 — ownership:** Begin from `reconcileScores`. Return a new sorted summary array with a deterministic tie-breaker.

**Hint 2 — reasoning:** Revisit the decision “Distinguish missing from zero”. Ask yourself: Explain why if(!row.score) would collapse two different facts.

**Answer direction:** A defensible solution demonstrates this observable result: The input record order remains unchanged and equal totals have a documented order. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Report incomplete participants

**Hint 1 — ownership:** Begin from `reconcileScores`. Add a filter or badge for summaries with missing scores.

**Hint 2 — reasoning:** Revisit the decision “Reject ambiguity instead of guessing”. Ask yourself: Choose a different policy only after writing an example that explains it.

**Answer direction:** A defensible solution demonstrates this observable result: A zero-only participant is not mislabeled incomplete. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Add a team label

**Hint 1 — ownership:** Begin from `reconcileScores`. Extend the fixture and decide how team identity is validated.

**Hint 2 — reasoning:** Revisit the decision “Separate identity from presentation”. Ask yourself: Explain which identifier answers “who?” and which answers “which recorded event?”.

**Answer direction:** A defensible solution demonstrates this observable result: A conflicting team for one participant is handled by an explicit rule. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Change duplicate handling deliberately

**Hint 1 — ownership:** Begin from `reconcileScores`. Explore ignoring exact repeated records while rejecting mismatched reuse of an ID.

**Hint 2 — reasoning:** Revisit the decision “Distinguish missing from zero”. Ask yourself: Explain why if(!row.score) would collapse two different facts.

**Answer direction:** A defensible solution demonstrates this observable result: Tests distinguish identical replay from conflicting data under the same ID. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Export a plain-text summary

**Hint 1 — ownership:** Begin from `reconcileScores`. Format the completed summaries without changing reconciliation.

**Hint 2 — reasoning:** Revisit the decision “Reject ambiguity instead of guessing”. Ask yourself: Choose a different policy only after writing an example that explains it.

**Answer direction:** A defensible solution demonstrates this observable result: The formatter handles empty input and preserves distinct participant IDs. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

r1 creates p1/Sam with total 4 → r2 creates a different p2/Sam with recorded zero → r3 increases p1 missing count → r4 adds 3 to p2 → r5 creates p3/Lee with a missing score.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
