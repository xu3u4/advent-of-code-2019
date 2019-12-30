import test from 'ava'

import { q1, q2 } from './index.js'
import data from './data.js'

test('q1) input', t => {
  const output = q1(data.input)
  t.is(output, 9706670)
});

test('q2) input', t => {
  const output = q2(data.input, 19690720)
  t.is(output, 2552)
});
