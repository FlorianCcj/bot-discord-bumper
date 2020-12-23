const help = require('../commands/help.command');
const info = require('../commands/info.command');
const init = require('../commands/init.command');
const utils = require('../utils/utils');

module.exports = async (client, msg) => {
  let print_help = true;
  if (msg.author.bot) {
    return;
  }
  const { config } = client;

  console.log(msg.content);

  if (
    msg.content.startsWith(`${config.PREFIX} info`)
  ) {
    info.get_info(msg, config);
    print_help = false;
  } else if (
    msg.content.startsWith(`${config.PREFIX} init`)
  ) {
    init.init(msg, config);
    print_help = false;
  }

  if (
    print_help
    && msg.content.startsWith(`${config.PREFIX}`)
    || msg.content.startsWith(`${config.PREFIX} -h`)
    || msg.content.startsWith(`${config.PREFIX} -help`)
    || msg.content.startsWith(`${config.PREFIX} -?`)
    || msg.content.startsWith(`${config.PREFIX} --h`)
    || msg.content.startsWith(`${config.PREFIX} --?`)
    || msg.content.startsWith(`${config.PREFIX} --help`)
  ) {
    help.print_help(msg, config);
  }
};
