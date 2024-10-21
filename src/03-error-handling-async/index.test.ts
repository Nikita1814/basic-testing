// Uncomment the code below and write your tests
//throwError, throwCustomError MyAwesomeError, rejectCustomError, 
import { resolveValue, throwError, throwCustomError, MyAwesomeError, rejectCustomError  } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue('Hi!')
    expect(result).toEqual('Hi!')
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => {throwError('(ᗒᗣᗕ)')}).toThrow('(ᗒᗣᗕ)')
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {throwError()}).toThrow('Oops!')
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => {throwCustomError()}).toThrow(new MyAwesomeError())
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {

    expect(async () => {await rejectCustomError()}).rejects.toThrow(new MyAwesomeError())
  });
});
