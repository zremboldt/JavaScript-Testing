import { add } from './add';

// Unit test
// It's a unit test because it only tests one independent piece.
test('add', () => {
  expect(add(5, 3)).toBe(8);
  expect(add(10, 5)).toBe(15);
});
