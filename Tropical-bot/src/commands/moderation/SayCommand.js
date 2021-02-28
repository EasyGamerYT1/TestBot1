const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'moderation', []);
  }

  async run(client, message, args) {
    //permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You arent allowed to use this command!**')
    //Shortcuts
    const messagetosay = args.join(" ")
    //Executing
    message.channel.send(messagetosay);
    message.delete();
  } catch (err) {
    console.log();
    message.channel.send('I was not able to say this message')
  }
}