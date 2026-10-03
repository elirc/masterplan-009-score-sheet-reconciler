import { test } from 'node:test';
import assert from 'node:assert/strict';

import { reconcileScores as reconcile } from '../public/core.js';
import { fixture } from '../public/fixtures.js';
test('same-name people remain distinct', () => { const p=reconcile(fixture); assert.equal(p.length,3); assert.deepEqual(p.map(x=>x.total),[4,3,0]); });
test('missing, omitted and zero remain distinct', () => { const p=reconcile(fixture); assert.deepEqual(p.map(x=>[x.recorded,x.missing]),[[1,1],[2,0],[0,1]]); });
test('empty sheet is an ordinary result', () => assert.deepEqual(reconcile([]),[]));
test('input records and order remain unchanged', () => { const input=fixture.map(x=>Object.freeze({...x})); Object.freeze(input); const before=JSON.stringify(input); reconcile(input); assert.equal(JSON.stringify(input),before); });
test('duplicate record IDs cannot double count', () => assert.throws(()=>reconcile([...fixture,fixture[0]])));
test('negative, decimal, string and nonfinite present scores are rejected', () => { for(const score of [-1,1.5,'2',NaN,Infinity]) assert.throws(()=>reconcile([{recordId:'x',participantId:'p',name:'A',score}])); });
test('conflicting names for one participant are rejected', () => assert.throws(()=>reconcile([...fixture,{recordId:'x',participantId:'p1',name:'Different',score:1}])));
test('overflowing total is rejected', () => assert.throws(()=>reconcile([{recordId:'a',participantId:'p',name:'A',score:Number.MAX_SAFE_INTEGER},{recordId:'b',participantId:'p',name:'A',score:1}])));
test('malformed rows and non-array input are rejected', () => { assert.throws(()=>reconcile(null)); assert.throws(()=>reconcile([null])); assert.throws(()=>reconcile([{recordId:'x',participantId:'',name:'A',score:2}])); });
