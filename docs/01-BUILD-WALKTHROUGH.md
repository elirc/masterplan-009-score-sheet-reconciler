# Building Score Sheet Reconciler, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

recordId identifies a score event; participantId identifies a person; name is a label. Scores are nonnegative safe integers when present. Null or omitted means missing, zero is recorded, conflicting names and duplicate events are rejected.

The smallest useful result answers this user need: A club organizer needs totals from several score records, including incomplete ones. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Name the three different facts

A record identifies one observation. A participant identifies the person being summarized. A display name labels that person for humans. Start by writing these definitions before building the Map. The fixture intentionally contains two Sams to make a name-based implementation fail visibly rather than appear correct on an easy example.

**Pause and produce evidence:** p1 Sam: 4 and null. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Accumulate one row at a time

For every row, validate identity and score, create a summary only if the participant is new, then update either missing or recorded and total. Draw the Map after each row. This turns an accumulator into a sequence you can inspect rather than a compact expression whose correctness is hard to explain.

**Pause and produce evidence:** p2 Sam: 0 and 3. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Check totals as well as inputs

Two individually safe integers can have a sum outside the safe range. The implementation checks the new total before storing it. This is a useful general lesson: validating each incoming field does not automatically prove an aggregate invariant. The reference rejects negative and decimal scores because this particular club’s scoring contract uses nonnegative whole points.

**Pause and produce evidence:** p3 Lee: omitted score. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Avoid stale tables after failures

The UI clears its previous summary when a new fixture is chosen and before reconciliation. If a new sheet is invalid, it should not continue displaying an old table as if it belonged to the new input. The browser check exercises successful data followed by invalid and empty sheets, making this state transition observable.

**Pause and produce evidence:** Duplicate r1. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. M001 additionally contains the actual two-file baseline and a separate opening-time correction.

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose stable identifiers and the missing-score policy.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
