const { Client } = require('discord.js');
const CONFIG = require("../config");
const fs = require('fs');
const utils = require('./utils/utils');
const client = new Client({
  disableEveryone: true
});

client.config = CONFIG;

const env = CONFIG.ENV;

if (env === 'dev') {
  const SECRET = require("../secret");
  client.config.TOKEN = SECRET.TOKEN;
  client.config.PREFIX = SECRET.BOT_PREFIX;
} else {
  client.config.TOKEN = process.env.TOKEN;
  client.config.PREFIX = process.env.BOT_PREFIX;
}

fs.readdir('./src/events', (err, files) => {
  if (err) {
    return console.log(err);
  }
  files.forEach(file => {
    client.on(
      file.split('.')[0],
      require(`./events/${file}`).bind(null, client)
    );
  });
});

client.on('error', console.error);
client.on('warn', console.warn);
//client.on('debug', console.log);

client.login(client.config.TOKEN);
