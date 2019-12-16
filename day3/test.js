import test from 'ava';

import { q1, q2 } from "./index.js"
import { ex, test1, test2, input } from "./data.js"

test('q1) ex', t => {
  const output = q1(ex)
  console.log(output)
  t.deepEqual(output, 6)
});

test('q1) test1', t => {
  const output = q1(test1)
  console.log(output)
  t.deepEqual(output, 159)
});

test('q1) test2', t => {
  const output = q1(test2)
  console.log(output)
  t.deepEqual(output, 135)
});

test('q1) input', t => {
  const output = q1(input)
  console.log(output)
  t.deepEqual(output, 273)
});

test('q2) ex', t => {
  const output = q2(ex)
  console.log(output)
  t.deepEqual(output, 30)
});

test('q2) test1', t => {
  const output = q2(test1)
  console.log(output)
  t.deepEqual(output, 610)
});

test('q2) test2', t => {
  const output = q2(test2)
  console.log(output)
  t.deepEqual(output, 410)
});

test('q2) input', t => {
  const output = q2(input)
  console.log(output)
  t.deepEqual(output, 15622)
});
