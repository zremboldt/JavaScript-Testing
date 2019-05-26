import { parseDriverData } from './parseDriverData';

// Output: command, name.
test('Parse new driver', () => {
  expect(parseDriverData('Driver Dan')).toEqual(['Driver', 'Dan']);
});

// Output: command, name, average speed, miles driven.
test('Parse new trip', () => {
  expect(parseDriverData('Trip Alex 12:01 13:16 42.0')).toEqual(['Trip', 'Alex', 33.6, '42.0']);
  expect(parseDriverData('Trip Dan 05:00 5:30 50.0')).toEqual(['Trip', 'Dan', 100, '50.0']);
});

test('Throw out trips where average speed is < 5 mph', () => {
  expect(parseDriverData('Trip Alex 05:00 21:15 80.0')).toBe(null);
});

test('Throw out trips where average speed is > 100 mph', () => {
  expect(parseDriverData('Trip Dan 05:00 5:30 51.0')).toBe(null);
});
