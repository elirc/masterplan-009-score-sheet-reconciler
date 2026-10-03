# M009: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Aggregation is a sequence of validated observations, not merely an addition. The event ID prevents counting one observation twice; the participant ID identifies whose summary changes; the name helps a human read it. Missing and zero contribute the same amount to total but convey different knowledge. Draw the accumulator after each row to keep those meanings visible.

## Start from one visible behavior

Read this contract slowly: recordId identifies a score event; participantId identifies a person; name is a label. Scores are nonnegative safe integers when present. Null or omitted means missing, zero is recorded, conflicting names and duplicate events are rejected.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Event identity

The unique identity of one recorded observation.

**Small experiment:** Distinguish a repeated event from two legitimate scores by one person.

Find the part of `reconcileScores` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **event identity** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Distinguish a repeated event from two legitimate scores by one person.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Participant identity

The stable key used for grouping.

**Small experiment:** Keep the two fictional Sams separate.

Find the part of `reconcileScores` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **participant identity** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Keep the two fictional Sams separate.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Missing observation

No score was supplied for that record.

**Small experiment:** Compare missing with a recorded numeric zero.

Find the part of `reconcileScores` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **missing observation** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare missing with a recorded numeric zero.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Aggregate invariant

A property that must hold after every update.

**Small experiment:** Explain why the accumulated total needs a safe-integer check.

Find the part of `reconcileScores` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **aggregate invariant** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain why the accumulated total needs a safe-integer check.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
// Missing and zero have different meanings. Input records are never updated.
export function reconcileScores(records) {
  if (!Array.isArray(records)) throw new TypeError('Scores must be an array.');
  const people = new Map();
  const recordIds = new Set();
  for (const row of records) {
    if (!row || typeof row.recordId !== 'string' || !row.recordId.trim() || recordIds.has(row.recordId)) {
      throw new TypeError('Each score record needs a unique recordId.');
    }
    if (typeof row.participantId !== 'string' || !row.participantId.trim() || typeof row.name !== 'string' || !row.name.trim()) {
      throw new TypeError('Each record needs a participantId and display name.');
    }
    recordIds.add(row.recordId);
    const missing = row.score === null || row.score === undefined;
    if (!missing && (!Number.isSafeInteger(row.score) || row.score < 0)) {
      throw new RangeError('Present scores must be nonnegative safe integers.');
    }
    if (!people.has(row.participantId)) people.set(row.participantId, { participantId: row.participantId, name: row.name, total: 0, recorded: 0, missing: 0 });
    const person = people.get(row.participantId);
    if (person.name !== row.name) throw new TypeError('One participant ID has conflicting names.');
    if (missing) person.missing++;
    else {
      const total = person.total + row.score;
      if (!Number.isSafeInteger(total)) throw new RangeError('Total exceeds safe integer range.');
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `reconcileScores`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
