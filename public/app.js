import { reconcileScores } from './core.js';
import { fixture } from './fixtures.js';
const result = document.querySelector('#result');
const totals = document.querySelector('#totals');
const source = document.querySelector('#source');
const select = document.querySelector('#scenario');
function selectedRecords() {
  if (select.value === 'empty') return [];
  if (select.value === 'invalid') return [...fixture, { recordId: 'bad', participantId: 'p1', name: 'Sam', score: -1 }];
  if (select.value === 'duplicate') return [...fixture, { ...fixture[0] }];
  return fixture;
}
select.addEventListener('change', () => {
  source.textContent = JSON.stringify(selectedRecords(), null, 2);
  totals.replaceChildren(); result.classList.remove('error'); result.textContent = 'New input selected. Calculate to see its result.';
});
document.querySelector('#reconcile').addEventListener('click', () => {
  totals.replaceChildren();
  try {
    const people = reconcileScores(selectedRecords());
    result.classList.remove('error'); result.textContent = people.length ? `${people.length} participants reconciled` : 'No score records yet.';
    for (const person of people) {
      const tr = document.createElement('tr');
      for (const value of [`${person.name} (${person.participantId})`, person.total, person.recorded, person.missing]) {
        const td = document.createElement('td'); td.textContent = value; tr.append(td);
      }
      totals.append(tr);
    }
  } catch (error) { showError(error); }
});
source.textContent = JSON.stringify(fixture, null, 2);

function showError(error) {
  result.classList.add('error');
  result.textContent = error.message;
}
