function get_word_from_category(cat, config) {
  const dictionary = [];
  for (const key in config.DICTIONARY) {
    if (
      Array.isArray(config.DICTIONARY[key][config.KEY['cat']])
      && config.DICTIONARY[key][config.KEY['cat']].includes(cat)
    ) {
      dictionary.push(key)
    }
  }
  return dictionary;
}

function get_all_categories(config) {
  let categories = [];
  for (const key in config.DICTIONARY) {
    const newcategories = config.DICTIONARY[key][config.KEY['cat']];
    if (newcategories === undefined) {
      continue;
    }
    categories = [...categories, ...newcategories.filter((item) => categories.indexOf(item) < 0)];
  }
  categories.sort();
  return categories;
}

module.exports = {
  get_all_categories,
  get_word_from_category,
};
