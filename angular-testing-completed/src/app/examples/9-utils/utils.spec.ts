import {
  capitalizeFirstLetter,
  convertArrayToEntityState,
  deepClone,
  generateUUID,
  isNullOrEmpty,
} from './utils';

describe('utils', () => {
  describe('convertArrayToEntityState', () => {
    it('should convert array to EntityState', () => {
      const array = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ];
      const result = convertArrayToEntityState(array);

      expect(result).toEqual({
        ids: [1, 2],
        entities: {
          '1': { id: 1, name: 'Item 1' },
          '2': { id: 2, name: 'Item 2' },
        },
      });
    });
  });

  describe('capitalizeFirstLetter', () => {
    it.each([
      ['hello', 'Hello'],
      ['p', 'P'],
      ['hello World', 'Hello World'],
    ])('should capitalize the first letter of a string %s', (text, result) => {
      expect(capitalizeFirstLetter(text)).toBe(result);
    });

    it('should return an empty string if input is empty', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });
  });

  describe('deepClone', () => {
    it('should create a deep clone of an object', () => {
      const obj = { a: 1, b: { c: 2 } };
      const clonedObj = deepClone(obj);

      expect(clonedObj).toEqual(obj);
      expect(clonedObj).not.toBe(obj);
      expect(clonedObj.b).not.toBe(obj.b);
    });
  });

  describe('isNullOrEmpty', () => {
    it.each([null, undefined, '', '   '])(
      'should return true for a value %s',
      (value) => {
        expect(isNullOrEmpty(value)).toBe(true);
      }
    );
    it('should return false for non-empty string', () => {
      expect(isNullOrEmpty('test')).toBe(false);
    });
  });
});

describe('generateUUID', () => {
  it('should generate a valid UUID', () => {
    const uuid = generateUUID();
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i; // regex to check uuid

    expect(uuidRegex.test(uuid)).toBe(true);
  });
});
