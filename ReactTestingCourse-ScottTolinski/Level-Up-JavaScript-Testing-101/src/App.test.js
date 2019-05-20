import { add, subtract, total } from './App';

// Unit test
// It's a unit test because it only tests one independent piece.
test('add', () => {
  expect(add(5, 3)).toBe(8);
  expect(add(10, 5)).toBe(15);
});

// Unit test
// It's a unit test because it only tests one independent piece.
test('subtract', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 5)).toBe(5);
});

// Integration test
// It's an integration test because total relies on add in order to function correctly.
test('total', () => {
  expect(total(30, 5)).toBe('$35');
});
