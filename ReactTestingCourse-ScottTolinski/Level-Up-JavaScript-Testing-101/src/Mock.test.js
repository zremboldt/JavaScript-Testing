import { total } from './App';

const add = jest.fn(() => 8);

test('add', () => {
  expect(add(5, 3)).toBe(8);
  // expect(add(10, 5)).toBe(15);
});

// Integration test
// It's an integration test because total relies on add in order to function correctly.
// test('total', () => {
//   expect(total(30, 5)).toBe('$35');
// });
