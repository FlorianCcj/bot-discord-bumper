const CONFIG = require("../../config");

function remove_two_first_word(original) {
  return original.split(' ').slice(2).join(' ');
}

function get_timer(
  timer,
  {min_offset, max_offset} = {
    min_offset: CONFIG.TIMER_MIN_OFFSET,
    max_offset: CONFIG.TIMER_MAX_OFFSET
  }) {
  const sign = Math.round(Math.random()) * 2 - 1;
  const offset = 0;
  //const offset = Math.floor(Math.random() * (max_offset - min_offset)) + min_offset;
  if (timer === undefined || timer === null) {
    return (CONFIG.DEFAULT_DELAY + sign * offset) * 60 * 1000;
  }
  return (timer + offset) * 60 * 1000;
}

async function wait_for(timer) {
  await new Promise(
    resolve => setTimeout(() => resolve(),
    timer)
  );
}

module.exports = {
  get_timer,
  remove_two_first_word,
  wait_for
};
