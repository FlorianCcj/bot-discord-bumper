const is_word_exist = (word, dictionnary) => undefined !== dictionnary[word];

function return_image(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['image']];
  if (
    config.DICTIONARY[word].hasOwnProperty(config.KEY['equals'])
    && typeof(config.DICTIONARY[word][config.KEY['equals']]) === 'string'
    && result === undefined
    || result === ''
  ) {
    result = return_image(config.DICTIONARY[word][config.KEY['equals']], config);
  }
  return result === '' ? undefined : result;
}
function return_thumbnail(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['thumbnail']];
  if (
    config.DICTIONARY[word].hasOwnProperty(config.KEY['equals'])
    && typeof(config.DICTIONARY[word][config.KEY['equals']]) === 'string'
    && result === undefined
    || result === ''
  ) {
    result = return_thumbnail(config.DICTIONARY[word][config.KEY['equals']], config);
  }
  return result === '' ? undefined : result;
}
function return_def(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['def']];
  if (
    config.DICTIONARY[word].hasOwnProperty(config.KEY['equals'])
    && typeof(config.DICTIONARY[word][config.KEY['equals']]) === 'string'
    && result === undefined
    || result === ''
  ) {
    result = return_def(config.DICTIONARY[word][config.KEY['equals']], config);
  }
  return result === '' ? undefined : result;
}
function return_cat(word, config) {
  if (!is_word_exist(word, config.DICTIONARY)) {
    return undefined
  }
  result = config.DICTIONARY[word][config.KEY['cat']];
  if (
    config.DICTIONARY[word].hasOwnProperty(config.KEY['equals'])
    && typeof(config.DICTIONARY[word][config.KEY['equals']]) === 'string'
    && (result === undefined || result === '')
  ) {
    result = return_cat(config.DICTIONARY[word][config.KEY['equals']], config);
  }
  return result;
}

module.exports = {
  is_word_exist,
  return_image,
  return_thumbnail,
  return_def,
  return_cat
};
