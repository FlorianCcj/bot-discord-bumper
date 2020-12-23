const dictionary = require('./dictionary.utils');
const {KEY} = require('../../config');

describe('dictionary.utils', () => {
  describe('is_word_exist', () => {
    const config = {
      DICTIONARY: {def1: {}},
      KEY: KEY
    }

    test('return true if word is in dict', () => {
      const word_to_check = 'def1';
      expect(dictionary.is_word_exist(word_to_check, config.DICTIONARY)).toBeTruthy()
    });

    test('return false if word is not in dict', () => {
      const word_to_check = 'def2';
      expect(dictionary.is_word_exist(word_to_check, config.DICTIONARY)).toBeFalsy()
    });
  });

  describe('return_cat', () => {
    const config = {
      DICTIONARY: {
        def1: {cat: ['image1']},
        def2: {cat: []},
        def3: {},
        def4: {synonym: 'def1'},
      },
      KEY: KEY
    }

    test('return undefined if def not existe', () => {
      expect(dictionary.return_cat('def98', config)).toBeUndefined();
    });

    test('return the cat if def is defined', () => {
      expect(dictionary.return_cat('def1', config)).toBe(config.DICTIONARY.def1[KEY['cat']]);
      expect(dictionary.return_cat('def2', config)).toBe(config.DICTIONARY.def2[KEY['cat']]);
      expect(dictionary.return_cat('def3', config)).toBe(config.DICTIONARY.def3[KEY['cat']]);
    });

    test('return the cat of the synonym if the word is a synonym', () => {
      expect(dictionary.return_cat('def4', config)).toBe(config.DICTIONARY.def1[KEY['cat']]);
    });
  });
  describe('return_def', () => {
    const config = {
      DICTIONARY: {
        def1: {def: 'image1'},
        def2: {cat: ''},
        def3: {},
        def4: {synonym: 'def1'},
      },
      KEY: KEY
    }

    test('return undefined if def not existe', () => {
      expect(dictionary.return_def('def98', config)).toBeUndefined();
    });

    test('return the def if def is defined', () => {
      expect(dictionary.return_def('def1', config)).toBe(config.DICTIONARY.def1[KEY['def']]);
      expect(dictionary.return_def('def2', config)).toBe(config.DICTIONARY.def2[KEY['def']]);
      expect(dictionary.return_def('def3', config)).toBe(config.DICTIONARY.def3[KEY['def']]);
    });

    test('return the def of the synonym if the word is a synonym', () => {
      expect(dictionary.return_def('def4', config)).toBe(config.DICTIONARY.def1[KEY['def']]);
    });
  });
  describe('return_image', () => {
    const config = {
      DICTIONARY: {
        def1: {image: 'image1'},
        def2: {image: ''},
        def3: {},
        def4: {synonym: 'def1'},
      },
      KEY: KEY
    }

    test('return undefined if def have no image', () => {
      expect(dictionary.return_image('def2', config)).toBeUndefined();
      expect(dictionary.return_image('def3', config)).toBeUndefined();
    });

    test('return the image if def have an image', () => {
      expect(dictionary.return_image('def1', config)).toBe(config.DICTIONARY.def1[KEY['image']]);
    });

    test('return the image of the synonym if the word is a synonym', () => {
      expect(dictionary.return_image('def4', config)).toBe(config.DICTIONARY.def1[KEY['image']]);
    });
  });
  describe('return_thumbnail', () => {
    const config = {
      DICTIONARY: {
        def1: {thumbnail: ['thumbnail1']},
        def2: {thumbnail: ''},
        def3: {},
        def4: {synonym: 'def1'},
      },
      KEY: KEY
    }

    test('return undefined if def have no thumbnail', () => {
      expect(dictionary.return_thumbnail('def2', config)).toBeUndefined();
      expect(dictionary.return_thumbnail('def3', config)).toBeUndefined();
    });

    test('return the thumbnail if def have an thumbnail', () => {
      expect(dictionary.return_thumbnail('def1', config)).toBe(config.DICTIONARY.def1[KEY['thumbnail']]);
    });

    test('return the thumbnail of the synonym if the word is a synonym', () => {
      expect(dictionary.return_thumbnail('def4', config)).toBe(config.DICTIONARY.def1[KEY['thumbnail']]);
    });
  });

});
