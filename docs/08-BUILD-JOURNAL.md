# Build journal: Score Sheet Reconciler

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A club organizer needs totals from several score records, including incomplete ones.

The main temptation was to make the project larger than its learning target. The useful boundary is **arrays, objects and accumulator reasoning**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

recordId identifies a score event; participantId identifies a person; name is a label. Scores are nonnegative safe integers when present. Null or omitted means missing, zero is recorded, conflicting names and duplicate events are rejected.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Separate identity from presentation

Two people can share a name. Grouping by participantId preserves that distinction. recordId solves a different problem: accidental duplicate events. One identifier cannot safely stand in for both.

**What a learner should challenge:** Explain which identifier answers “who?” and which answers “which recorded event?”.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Distinguish missing from zero

A score of zero is an observed result. A missing score is incomplete information. Both contribute zero to the total, but their recorded and missing counts differ, which affects how a reader interprets the summary.

**What a learner should challenge:** Explain why if(!row.score) would collapse two different facts.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Reject ambiguity instead of guessing

The reference rejects a participant ID with conflicting display names and rejects a duplicate record ID. Another product could choose latest-name or deduplication rules, but that would require an explicit policy. Safe integer checks also apply to the accumulated total.

**What a learner should challenge:** Choose a different policy only after writing an example that explains it.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `reconcileScores`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
