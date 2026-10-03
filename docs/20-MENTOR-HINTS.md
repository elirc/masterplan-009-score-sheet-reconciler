# M009: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain event identity through this project

The unique identity of one recorded observation.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain participant identity through this project

The stable key used for grouping.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain missing observation through this project

No score was supplied for that record.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain aggregate invariant through this project

A property that must hold after every update.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: p1 Sam: 4 and null

total 4; recorded 1; missing 1

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: p2 Sam: 0 and 3

total 3; recorded 2; missing 0

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: p3 Lee: omitted score

total 0; recorded 0; missing 1

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Explain which identifier answers “who?” and which answers “which recorded event?”.

Two people can share a name. Grouping by participantId preserves that distinction. recordId solves a different problem: accidental duplicate events. One identifier cannot safely stand in for both.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Explain why if(!row.score) would collapse two different facts.

A score of zero is an observed result. A missing score is incomplete information. Both contribute zero to the total, but their recorded and missing counts differ, which affects how a reader interprets the summary.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Choose a different policy only after writing an example that explains it.

The reference rejects a participant ID with conflicting display names and rejects a duplicate record ID. Another product could choose latest-name or deduplication rules, but that would require an explicit policy. Safe integer checks also apply to the accumulated total.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** What information is lost if you group by a nonunique name?

Aggregation is a sequence of validated observations, not merely an addition. The event ID prevents counting one observation twice; the participant ID identifies whose summary changes; the name helps a human read it. Missing and zero contribute the same amount to total but convey different knowledge. Draw the accumulator after each row to keep those meanings visible.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Show completeness percentages

**First hint:** The desired improvement is “Communicate how many observations contain scores.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive recorded divided by recorded-plus-missing; define the empty denominator; keep total separate.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Recorded zero improves completeness while missing does not.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose percentage formatting. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a maximum-score summary

**First hint:** The desired improvement is “Report the largest recorded observation per person.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Track only present scores; represent no recorded maximum explicitly; preserve identity grouping.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: All-missing differs from a recorded maximum of zero.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the no-maximum representation. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a row-by-row trace view

**First hint:** The desired improvement is “Make the accumulator inspectable.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Produce copied snapshots after validated rows; label each event ID; keep trace mode separate from ordinary output.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Earlier snapshots do not change when later rows accumulate.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose the snapshot detail level. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a participant filter

**First hint:** The desired improvement is “Narrow displayed summaries after reconciliation.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Reconcile complete input first; filter by participant ID; retain validation of hidden rows.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: An invalid hidden row cannot be silently ignored.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a filter UI appropriate to the fixture. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add an explicit missing-score legend

**First hint:** The desired improvement is “Explain what the counts mean.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Write contrasting zero and null examples; place a legend near the table; verify wording against fixtures.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The legend never describes missing as an observed zero.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a short example pair. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a new participant fixture

**First hint:** The desired improvement is “Test growth without special cases.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Add a distinct ID with a familiar duplicate label; give it both present and missing scores; compute expected summary by hand.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Existing summaries remain separate and unchanged.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose event values that expose grouping errors. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a sum-overflow diagnostic

**First hint:** The desired improvement is “Explain a valid-row aggregate failure.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Combine individually safe large scores; detect the first unsafe accumulated total; report the participant identity.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Failure occurs before an unsafe total is presented as valid.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose two input values and show the arithmetic. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Compare strict and latest-name policy

**First hint:** The desired improvement is “Practice an explicit product-policy change.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep the strict reference on main; define a latest-name branch; preserve event and participant identity rules.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The branch tests conflicting labels without merging different participants.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose how latest is determined. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add reconciliation provenance

**First hint:** The desired improvement is “Help a reader connect a summary to its input.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Include contributing event IDs in a separate inspectable field; preserve order policy; keep totals derived from validated scores.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Every input event belongs to exactly one participant summary.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether missing events appear in provenance. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
