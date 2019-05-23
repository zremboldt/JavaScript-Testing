import { parseDriverData } from './index';

test('Parse new driver', () => {
  expect(parseDriverData(['Driver Dan'])).toEqual(['Driver', 'Dan']);
});

test('Parse new trip', () => {
  expect(parseDriverData(['Trip Alex 12:01 13:16 42.0'])).toEqual(['Trip', 'Alex', '42', '34.6']);
});

// 1.25 hours
