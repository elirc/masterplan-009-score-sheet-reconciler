# M009: practice stories 07–15

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

These nine proposals extend the original six stories. They are intentionally not implemented in the reference. Each plan gives you boundaries and a route, while leaving the actual patch, exact fixtures and a product decision to you. Start with one story; do not bundle all nine into a single difficult-to-review change.

## Story 07: Show completeness percentages

**User story:** As a user or learner of Score Sheet Reconciler, I want to communicate how many observations contain scores so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Recorded zero improves completeness while missing does not.

**Decision you own:** Choose percentage formatting. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Recorded zero improves completeness while missing does not.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Derive recorded divided by recorded-plus-missing.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Define the empty denominator.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Keep total separate.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Recorded zero improves completeness while missing does not.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 07: Show completeness percentages in Score Sheet Reconciler.
Acceptance requirement: Recorded zero improves completeness while missing does not.
My unresolved choice: Choose percentage formatting.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 08: Add a maximum-score summary

**User story:** As a user or learner of Score Sheet Reconciler, I want to report the largest recorded observation per person so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** All-missing differs from a recorded maximum of zero.

**Decision you own:** Choose the no-maximum representation. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **All-missing differs from a recorded maximum of zero.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Track only present scores.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Represent no recorded maximum explicitly.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Preserve identity grouping.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “All-missing differs from a recorded maximum of zero.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 08: Add a maximum-score summary in Score Sheet Reconciler.
Acceptance requirement: All-missing differs from a recorded maximum of zero.
My unresolved choice: Choose the no-maximum representation.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 09: Add a row-by-row trace view

**User story:** As a user or learner of Score Sheet Reconciler, I want to make the accumulator inspectable so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Earlier snapshots do not change when later rows accumulate.

**Decision you own:** Choose the snapshot detail level. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Earlier snapshots do not change when later rows accumulate.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Produce copied snapshots after validated rows.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Label each event ID.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Keep trace mode separate from ordinary output.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Earlier snapshots do not change when later rows accumulate.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 09: Add a row-by-row trace view in Score Sheet Reconciler.
Acceptance requirement: Earlier snapshots do not change when later rows accumulate.
My unresolved choice: Choose the snapshot detail level.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 10: Add a participant filter

**User story:** As a user or learner of Score Sheet Reconciler, I want to narrow displayed summaries after reconciliation so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** An invalid hidden row cannot be silently ignored.

**Decision you own:** Choose a filter UI appropriate to the fixture. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **An invalid hidden row cannot be silently ignored.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Reconcile complete input first.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Filter by participant ID.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Retain validation of hidden rows.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “An invalid hidden row cannot be silently ignored.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 10: Add a participant filter in Score Sheet Reconciler.
Acceptance requirement: An invalid hidden row cannot be silently ignored.
My unresolved choice: Choose a filter UI appropriate to the fixture.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 11: Add an explicit missing-score legend

**User story:** As a user or learner of Score Sheet Reconciler, I want to explain what the counts mean so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The legend never describes missing as an observed zero.

**Decision you own:** Choose a short example pair. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The legend never describes missing as an observed zero.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Write contrasting zero and null examples.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Place a legend near the table.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Verify wording against fixtures.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The legend never describes missing as an observed zero.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 11: Add an explicit missing-score legend in Score Sheet Reconciler.
Acceptance requirement: The legend never describes missing as an observed zero.
My unresolved choice: Choose a short example pair.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 12: Add a new participant fixture

**User story:** As a user or learner of Score Sheet Reconciler, I want to test growth without special cases so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Existing summaries remain separate and unchanged.

**Decision you own:** Choose event values that expose grouping errors. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Existing summaries remain separate and unchanged.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Add a distinct ID with a familiar duplicate label.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Give it both present and missing scores.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Compute expected summary by hand.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Existing summaries remain separate and unchanged.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 12: Add a new participant fixture in Score Sheet Reconciler.
Acceptance requirement: Existing summaries remain separate and unchanged.
My unresolved choice: Choose event values that expose grouping errors.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 13: Add a sum-overflow diagnostic

**User story:** As a user or learner of Score Sheet Reconciler, I want to explain a valid-row aggregate failure so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Failure occurs before an unsafe total is presented as valid.

**Decision you own:** Choose two input values and show the arithmetic. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Failure occurs before an unsafe total is presented as valid.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Combine individually safe large scores.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Detect the first unsafe accumulated total.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Report the participant identity.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Failure occurs before an unsafe total is presented as valid.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 13: Add a sum-overflow diagnostic in Score Sheet Reconciler.
Acceptance requirement: Failure occurs before an unsafe total is presented as valid.
My unresolved choice: Choose two input values and show the arithmetic.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 14: Compare strict and latest-name policy

**User story:** As a user or learner of Score Sheet Reconciler, I want to practice an explicit product-policy change so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** The branch tests conflicting labels without merging different participants.

**Decision you own:** Choose how latest is determined. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **The branch tests conflicting labels without merging different participants.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Keep the strict reference on main.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Define a latest-name branch.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Preserve event and participant identity rules.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “The branch tests conflicting labels without merging different participants.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 14: Compare strict and latest-name policy in Score Sheet Reconciler.
Acceptance requirement: The branch tests conflicting labels without merging different participants.
My unresolved choice: Choose how latest is determined.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.

## Story 15: Add reconciliation provenance

**User story:** As a user or learner of Score Sheet Reconciler, I want to help a reader connect a summary to its input so I can use or explain the behavior with less uncertainty.

**Acceptance contract:** Every input event belongs to exactly one participant summary.

**Decision you own:** Choose whether missing events appear in provenance. Write your answer before implementation. Different answers can be valid when they produce a clear, verified contract.

### 1. Define the smallest complete change

Read `public/core.js` and trace `reconcileScores` once. Then inspect `public/app.js` to determine where this feature enters and becomes visible. Write a two-sentence scope: the new outcome and one adjacent feature you are deliberately leaving for later. Avoid inventing an endpoint, framework or storage mechanism unless this story explicitly needs it.

### 2. Write examples before editing

Create three rows in your journal: ordinary use, a boundary or missing input, and a repeat/recovery sequence. The required observation is: **Every input event belongs to exactly one participant summary.** Give each row exact starting data, the user action and expected retained state. If this is a documentation or layout task, use observable content and keyboard/viewport conditions rather than a meaningless unit test of a sentence.

### 3. Implement in this order

1. **Include contributing event IDs in a separate inspectable field.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
2. **Preserve order policy.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.
3. **Keep totals derived from validated scores.** Before proceeding, name the value or element this step owns and predict one visible consequence. Keep the step small enough to inspect in a diff.

After those steps, remove any experimental code that no longer serves the contract. Do not remove a guard merely because the first happy-path example passes. Explain every new stored value: what event changes it, who owns it and whether it could instead be derived from existing information.

### 4. Challenge the first implementation

Propose a plausible incorrect version that would look successful in an easy demo but violate “Every input event belongs to exactly one participant summary.” Choose one input or interaction that distinguishes it from your intended result. This counterexample is the basis for a useful regression or manual acceptance check. A second ordinary screenshot is less useful if it cannot reject the wrong version.

### 5. Review and hand off

Use npm test, plus the relevant real interaction or CLI observation. Inspect the exact changed files and verify that the original contract still holds for one neighboring case. Record the actual commands or browser steps and their output. The reference verification document belongs to the supplied implementation; it cannot certify your new story before you run fresh checks.

Write the handoff in four lines: trigger, resulting behavior, evidence and remaining limitation. Include the design decision you made and the reason. If an assistant suggested the patch, identify which part you independently explained and checked. Keep your personal journal in the ignored my-journal folder.

### Saved prompt: request a challenge, not a solution

```text
I am implementing story 15: Add reconciliation provenance in Score Sheet Reconciler.
Acceptance requirement: Every input event belongs to exactly one participant summary.
My unresolved choice: Choose whether missing events appear in provenance.
My proposed decision, example and smallest diff: [fill these in].
Challenge one assumption and propose one discriminating example.
Do not implement the feature or claim any tests were run.
```

**Completion gate:** you can explain the changed behavior without reading the patch, reproduce the acceptance example, show one boundary check and name a limitation. The story remains unfinished until you supply that evidence.
