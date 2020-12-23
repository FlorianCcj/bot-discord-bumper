// * une commande permettant d expliquer qu est ce que c est que ce bot

const { MessageEmbed } = require('discord.js');

function print_help(msg, config) {

  const cmd_message = ''
  + '-------------------\n'
  + 'Help: ' + config.PREFIX + ' (-h,-?,-help,--h,--?,--help)`\n'
  + '-------------------\n'
  + `- ${config.PREFIX} info: return info about next bump\n`
  + `- ${config.PREFIX} init: tell to the bot where to bump\n`
  ;

  const embed = new MessageEmbed()
    .setDescription('Bumper helper')
    .addField('Command', cmd_message)
    .setFooter(config.FOOTER_TEXT)
  ;

  msg.channel.send(embed);
}

module.exports = {
  print_help
};
