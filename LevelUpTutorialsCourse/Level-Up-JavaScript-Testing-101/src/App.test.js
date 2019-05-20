import { add, subtract } from './App';

test('add', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtract', () => {
  expect(subtract(5, 3)).toBe(2);
});
