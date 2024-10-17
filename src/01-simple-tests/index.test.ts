// Uncomment the code below and write your tests
import { simpleCalculator } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 1, b: 2, action: '+' });
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 1, action: '-' });
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: '*' });
    expect(result).toBe(6);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 2, action: '/' });
    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: '^' });
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: '(╯°□°)╯︵ ┻━┻' });
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({
      a: '(╯°□°)╯︵ ┻━┻',
      b: '┻━┻ ︵╰(°□°╰)',
      action: '*',
    });
    expect(result).toBe(null);
  });
});
