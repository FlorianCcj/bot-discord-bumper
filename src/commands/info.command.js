// * une commande avec une categorie affichant les formes liée a la categorie

const { MessageEmbed } = require('discord.js');

const utils = require('../utils/utils');

function get_info(msg, config) {
  msg.channel.send('coucou info');
}

module.exports = {
  get_info
};
