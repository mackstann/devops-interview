/* eslint-disable no-undef */
import { addNumbers } from '../functions';

describe('Test Add Numbers', () => {
  test('10 + 2', () => {
    expect(addNumbers('10_2')).toBe(12);
  });
});
