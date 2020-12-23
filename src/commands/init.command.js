// * une commande avec le nom de la forme pour afficher la description

const { MessageEmbed, MessageAttachment } = require('discord.js');

const utils = require('../utils/utils');

function init(msg, config) {
  msg.channel.send('coucou init');
}

module.exports = {
  init
};
