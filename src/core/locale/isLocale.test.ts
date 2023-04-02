import { isLocale } from './isLocale';

describe('isLocale', () => {
  test('Is', () => {
    expect(isLocale('cs')).toEqual(true);
    expect(isLocale('abcd')).toEqual(false);
  });
});
