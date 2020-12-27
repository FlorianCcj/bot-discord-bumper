const message = require('../utils/message.utils');
const file = require('../utils/file.utils');
const utils = require('../utils/utils');

async function sendMessagereturnTimer(client) {
  file_data = file.read_in_json_file(client.config.FILE_PATH);
  if (
    file_data.hasOwnProperty(client.config.KEYS['channel_id'])
    && file_data[client.config.KEYS['channel_id']]
  ) {
    console.log('sending message', new Date());
    message.send_message_to_config_channel(client.config.MESSAGE_TO_SEND, client);

    await utils.wait_for(utils.get_timer(clent.config.WAIT_BEFORE_ANSWER));
    
    const last_message_content = await message.get_last_message(client);
    const timer_result = new RegExp(/.* (\d+) minutes.*/g).exec(last_message_content);
    timer_asked = timer_result === null ? null : timer_result[1];
    
    message.get_last_message(client);
    
    return timer_asked === null ? null : +timer_asked;
  }
}

module.exports = async (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  while (true) {
    const timer = utils.get_timer(await sendMessagereturnTimer(client));
    console.log(`Next message in ${timer/1000/60} minutes`);
    await new Promise(
      resolve => setTimeout(
        () => resolve(), 
        timer
      )
    );
  }
};
