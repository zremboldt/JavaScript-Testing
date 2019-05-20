// Intentional bug here in `add` ↓
const add = (a, b) => a - b;
const subtract = (a, b) => a - b;

// Tests
let result = add(3, 7);
let expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

// My assertion library
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}.`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not gridTemplateRows:  than ${expected}.`);
      }
    },
    toBeLessThan(expected) {
      if (actual >= expected) {
        throw new Error(`${actual} is not less than ${expected}.`);
      }
    }
  };
}
