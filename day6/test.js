import test from 'ava';

import { q1, q2 } from "./index.js"
import data from "./data.js"

test('q1) test1', t => {
  const output = q1(data.test1)

  t.is(output, 42)
});

test('q1) input', t => {
  const output = q1(data.input)

  t.is(output, 200001)
});

test('q2) test2', t => {
  const output = q2(data.test2, 'YOU', 'SAN')

  t.is(output, 4)
});

test('q2) input', t => {
  const output = q2(data.input, 'YOU', 'SAN')

  t.is(output, 379)
});
