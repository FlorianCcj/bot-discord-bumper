const CONFIG = require("../../config");
const file = require("./file.utils");

async function get_last_message(client) {
  const file_db = file.read_in_json_file(CONFIG.FILE_PATH);
  if (
    file_db.hasOwnProperty(CONFIG.KEYS['channel_id'])
    && file_db[CONFIG.KEYS['channel_id']]
  ) {
    let last_message_id = '';
    let last_message_content = '';
    const channel = client.channels.cache.get(file_db[CONFIG.KEYS['channel_id']]);
    await channel.fetch({ limit: 1 }).then(messages => {
      last_message_id = messages.lastMessageID;
    });
    await channel.messages
      .fetch(last_message_id)
      .then(msg_content => { 
        last_message_content = msg_content.content;
      })
    ;
    return last_message_content;
  } else {
    console.log('no channel is configured !');
  }
}

function send_message_to_config_channel(msg, client) {
  const file_db = file.read_in_json_file(CONFIG.FILE_PATH);
  if (
    file_db.hasOwnProperty(CONFIG.KEYS['channel_id'])
    && file_db[CONFIG.KEYS['channel_id']]
  ) {
    const channel = client.channels.cache.get(file_db[CONFIG.KEYS['channel_id']]);
    channel.send(msg);
  } else {
    console.log('no channel is configured !');
  }
}

module.exports = {
  get_last_message,
  send_message_to_config_channel
};
