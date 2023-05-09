import { generateRandomInteger, sleep, validateEmail } from '.';

describe('generateRandomInteger', () => {
  it('should generate an integer within the specified range', () => {
    const min = 5;
    const max = 10;
    const result = generateRandomInteger(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should generate an integer when the min and max values are the same', () => {
    const min = 42;
    const max = 42;
    const result = generateRandomInteger(min, max);

    expect(result).toBe(min);
  });
});

describe('sleep', () => {
  it('should resolve after the specified time', async () => {
    const ms = 300;
    const start = Date.now();

    await sleep(ms);

    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeGreaterThanOrEqual(ms);
    expect(duration).toBeLessThanOrEqual(ms + 50);
  });
});

describe('validateEmail', () => {
  it('should return true for valid email addresses', () => {
    const validEmail = 'test@example.com';

    expect(validateEmail(validEmail)).toBeTruthy();
  });

  it('should return false for invalid email addresses', () => {
    const invalidEmail = 'test@.com';

    expect(validateEmail(invalidEmail)).toBeFalsy();
  });
});
