const { sum, difference } = require('./006_TestingWithJest');

// Test
test('sum adds numbers', async () => {
  const result = await sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('difference subtracts numbers', async () => {
  const result = await difference(8, 3);
  const expected = 5;
  expect(result).toBe(expected);
});
