import { add } from './app';

test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});
