const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('*--**--**--**--**--**--**--**--**--**--***Help Commands***--**--**--**--**--**--**--**--**--**--*\n-help: For if you dont know what for commands there are.\n-kick: To Kick someone form your server.\n-ban: To ban someone from your server, he can not join back until unban.\n-unban: when someone is banned you can use this to unban them.\n-say: sends your text with your bot, with NO embed.\n-Say: sends your text wiht your bot, with AN embed.\n-snipe: You can see deleted messages.\n-nickname: You can change someones nickname.')
  }
}

