import test from 'ava';

import { q1, q2 } from "./index.js"
import data from "./data.js"

test('q1) test1', t => {
  const output = q1(data.test1)
  t.is(output, 2)
});

test('q1) test2', t => {
  const output = q1(data.test2)
  t.is(output, 2)
});

test('q1) test3', t => {
  const output = q1(data.test3)
  t.is(output, 654)
});

test('q1) test4', t => {
  const output = q1(data.test4)
  t.is(output, 33583)
});

test('q1) input', t => {
  const output = q1(data.input)
  t.is(output, 3363929)
});

test('q2) test2', t => {
  const output = q2(data.test2)
  t.is(output, 2)
});

test('q2) test3', t => {
  const output = q2(data.test3)
  t.is(output, 966)
});

test('q2) test4', t => {
  const output = q2(data.test4)
  t.is(output, 50346)
});

test('q2) input', t => {
  const output = q2(data.input)
  t.is(output, 5043026)
});