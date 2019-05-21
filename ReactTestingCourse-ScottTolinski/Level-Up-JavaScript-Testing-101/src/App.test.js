import { total } from './App';

// Integration test
// It's an integration test because total relies on add in order to function correctly.
test('total', () => {
  expect(total(30, 5)).toBe('$35');
});
