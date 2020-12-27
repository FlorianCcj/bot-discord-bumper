// * une commande avec le nom de la forme pour afficher la description

const file = require('../utils/file.utils');

function init(msg, config, client) {
  const file_db = file.read_in_json_file(config.FILE_PATH);

  // si il y a deja un channel on demande de forcer,
  // sinon on le creer
  if(msg.content.split(' ')[2] == config.FORCE_OPTION) {
    file_db[config.KEY['channel_id']] = msg.channel.id;
    msg.channel.send(`Le channel a bien ete force.`);
  } else if (
    !file_db.hasOwnProperty(config.KEY['channel_id'])
    || !file_db[config.KEY['channel_id']]
  ) {
    file_db[config.KEY['channel_id']] = msg.channel.id;
    msg.channel.send(`Le channel a bien ete configure.`);
  } else {
    if (file_db[config.KEY['channel_id']] !== msg.channel.id) {
      const channel_name = client.channels.cache.get(msg.channel.id).name;
      msg.channel.send(`Un channel est deja configure sur \`${channel_name}\`.`);
      msg.channel.send(`Si vous etes sur de vouloir le supprimer lancer: ${config.PREFIX} init -f`);
    } else {
      msg.channel.send(`Le channel est deja initialise.`);
    }
  }

  file.write_in_json_file(config.FILE_PATH, file_db);
}

module.exports = {
  init
};
