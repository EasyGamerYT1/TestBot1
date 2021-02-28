const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('**You arent allowed to use this command!**');
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have the ban permissions.")
    //Varlables:
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();
    //Input Cheking:
    if (!reason) reason = 'No reason given';
    if (!args[0]) return message.channel.send('You must state someone to ban. `\-ban @user reason\`');
    if (!mentionedMember) return message.channel.send('The member mentioned is not in the server.');
    //Executing
    const banEmbed = new Discord.MessageEmbed()
    .setTitle(`You have been banned from ${message.guild.name}`)
    .setDescription(`Reason for being banned: ${reason}`)
    .setColor("#ff0000")
    .setTimestamp();

  await mentionedMember.send(banEmbed).catch(err => console.log(err));
  await mentionedMember.ban({
    days: 7,
    reason: reason
  }).catch(err => console.log(err)).then(() => message.channel.send("Succesfully banned " + mentionedMember.user.tag));
  }
}