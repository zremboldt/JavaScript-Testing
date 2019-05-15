// Intentional bug here in `add` ↓
const add = (a, b) => a - b;
const subtract = (a, b) => a - b;

// Test
const result = add(3, 7);
const expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}.`);
}
