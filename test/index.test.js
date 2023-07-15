// const { sum } = require('../src/test')
import { sum } from '../src/test'

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2);
});