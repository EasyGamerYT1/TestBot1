const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("You dont have permissions to use this command.");
    if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send("I Require \`MANAGE_NICKNAMES\` permission to change nicknames.");
    //Varlables:
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");
    //Input Cheking:
    if (!args[0]) return message.channel.send("You must state a member to change a nickname.");
    if (!mentionedMember) return message.channel.send("The memeber stated is not in the server");
    if (!nickName) return message.channel.send("You must state a nickname.");
    if (!mentionedMember.kickable) return message.channel.send("I cannot change that members nickname as their roles is higher than mine.");
    //Executing
    await mentionedMember.setNickname(nickName).catch(err => console.log(err) && message.channel.send("Hey i cannot add that nickname due to an error"));
  
  }
}