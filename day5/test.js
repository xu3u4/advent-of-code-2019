import test from 'ava';

import { q1 } from "./index.js"
import data from "./data.js"

// test('q1) test1', t => {
//   const output = q1(data.test1, 5)
//   t.is(output, '5')
// });

// test('q1) input', t => {
//   const output = q1(data.input, 1)
//   t.is(output, '9431221')
// });

test('q2) test2, input === 0 > 0', t => {
  const output = q1(data.test2, 0)
  t.is(output, '0')
});

test('q2) test2, input !== 0 > 1', t => {
  const output = q1(data.test2, 999)
  t.is(output, '1')
});

test('q2) test3, input === 0 > 0', t => {
  const output = q1(data.test3, 0)
  t.is(output, '0')
});

test('q2) test3, input !== 0 > 1', t => {
  const output = q1(data.test3, 999)
  t.is(output, '1')
});

test('q2) test4, input < 8 > 999', t => {
  const output = q1(data.test4, 3)
  t.is(output, '999')
});

test('q2) test4, input === 8 > 1000', t => {
  const output = q1(data.test4, 8)
  t.is(output, '1000')
});

test('q2) test4, input > 8 > 1001', t => {
  const output = q1(data.test4, 39)
  t.is(output, '1001')
});

test('q2) input, input < 8 > 999', t => {
  const output = q1(data.input, 5)
  t.is(output, '1409363')
});
