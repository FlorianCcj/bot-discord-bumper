function remove_two_first_word(original) {
  return original.split(' ').slice(2).join(' ');
}

module.exports = {
  remove_two_first_word
};
