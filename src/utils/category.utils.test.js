const category = require('./category.utils');

describe('category.utils', () => {
  describe('get_word_from_category', () => {
    test('return all word with a category', () => {
      const config = {
        DICTIONARY: {
          'def1': {
            cat: ['cat2']
          },
          'def2': {
            cat: ['cat1', 'cat2']
          }
        },
        KEY: {
          cat: 'cat'
        }
      };
      const cat_to_extract = 'cat2';
      const result = ['def1', 'def2'];
      expect(category.get_word_from_category(cat_to_extract, config)).toStrictEqual(result);
    });

    test('still work if there is no cat', () => {
      const config = {
        DICTIONARY: {
          'def1': {
            cat: ['cat2']
          },
          'def2': {
            cat: ['cat1', 'cat2']
          },
          'def3': {
            synonym: 'def1'
          }
        },
        KEY: {
          cat: 'cat'
        }
      };
      const cat_to_extract = 'cat2';
      const result = ['def1', 'def2'];
      expect(category.get_word_from_category(cat_to_extract, config)).toStrictEqual(result);
    });
  });

  describe('get_all_categories', () => {
    test('get a coategory in a def', () => {
      const config = {
        DICTIONARY: {
          'def3': {
            cat: ['plop']
          }
        },
        KEY: {
          cat: 'cat'
        }
      }
      const result = ['plop'];
      expect(category.get_all_categories(config)).toStrictEqual(result);
    });

    test('return empty array if no cat', () => {
      const config = {
        DICTIONARY: {
          'def3': {}
        },
        KEY: {
          cat: 'cat'
        }
      }
      const result = [];
      expect(category.get_all_categories(config)).toStrictEqual(result);
    });

    test('get all categories in multiple def', () => {
      const config = {
        DICTIONARY: {
          'def1': {
            cat: ['hey', 'oh']
          },
          'def3': {
            cat: ['plop']
          }
        },
        KEY: {
          cat: 'cat'
        }
      }
      const result = ['hey', 'oh', 'plop'];
      expect(category.get_all_categories(config)).toStrictEqual(result);
    });
  });
});
