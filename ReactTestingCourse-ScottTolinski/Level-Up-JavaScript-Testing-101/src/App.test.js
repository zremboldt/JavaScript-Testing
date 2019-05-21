import { total } from './App';
import { add } from './add';

jest.mock('./add', () => ({
  add: jest.fn(() => 35)
}));

// Integration test
// It's an integration test because total relies on add in order to function correctly.
test('total', () => {
  expect(total(30, 5)).toBe('$35');
});
