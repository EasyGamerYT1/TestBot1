const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('Say', 'moderation', []);
  }

  async run(client, message, args) {
    //permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You arent allowed to use this command!**')
    //Shortcuts
    const messagetosay = args.join(" ")
    //Embed
    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(messagetosay)
      .setColor('DARK_RED')
      .setTimestamp();
    //Executing
    message.channel.send(sayEmbed);
    message.delete();
  } catch (err) {
    console.log();
    message.channel.send('I was not able to say this message')
  }
}