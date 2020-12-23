const utils = require('../utils/utils');

describe('utils', () => {
  describe('remove_two_first_word', () => {
    test('return string with the two first word less', () => {
      const source = 'hey dude it is me';
      const result = 'it is me';
      expect(utils.remove_two_first_word(source)).toBe(result);
    });
  });
});
