# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: Two Sams become one person

**Introduce or discuss this mistake:** Use name as the Map key in a scratch implementation.

**Discriminating experiment:** The supplied fixture should produce three participants, not two.

### Worked diagnosis

First restate the expected contract from the [concepts guide](02-CONCEPTS-AND-TRACES.md#the-exact-contract) in your own words. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **Group by participantId and retain name only as a label.** Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: Zero is counted as missing

**Introduce or discuss this mistake:** Replace the explicit null/undefined check with a falsy check.

**Discriminating experiment:** p2 has a real zero and must have two recorded scores.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** Separate presence from numeric magnitude.

## Case 3: An input replay inflates the total

**Introduce or discuss this mistake:** Remove the recordIds duplicate guard.

**Discriminating experiment:** Append a copy of r1 to the fixture.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** Choose and enforce a duplicate-event policy before aggregation.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
