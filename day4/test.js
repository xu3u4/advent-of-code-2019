import test from 'ava';

import { verify1, verify2, find1, find2 } from "./index.js"
import data from "./data.js"

test('q1) test1', t => {
  const output = verify1(data.test1)
  t.is(output, true)
});

test('q1) test2', t => {
  const output = verify1(data.test2)
  t.is(output, false)
});

test('q1) test3', t => {
  const output = verify1(data.test3)
  t.is(output, false)
});

test('q1) input', t => {
  const output = find1(138307, 654504)
  t.is(output, 1855)
});

test('q2) test4', t => {
  const output = verify2(data.test4)
  t.is(output, true)
});

test('q2) test5', t => {
  const output = verify2(data.test5)
  t.is(output, false)
});

test('q2) test6', t => {
  const output = verify2(data.test6)
  t.is(output, true)
});

test('q2) input', t => {
  const output = find2(138307, 654504)
  t.is(output, 1253)
});