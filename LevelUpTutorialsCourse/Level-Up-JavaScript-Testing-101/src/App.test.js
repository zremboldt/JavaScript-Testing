import { add, subtract, multiply } from './App';

// Unit test
test('add', () => {
  expect(add(5, 3)).toBe(8);
  expect(add(10, 5)).toBe(15);
});

// Unit test
test('subtract', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(10, 5)).toBe(5);
});

// Unit test
test('multiply', () => {
  expect(multiply(4, 5)).toBe(20);
  expect(multiply(7, 4)).toBe(28);
});
