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
      person.total = total; person.recorded++;
    }
  }
  return [...people.values()];
}
