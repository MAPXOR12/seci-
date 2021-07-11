const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vkick",
  aliases: [],
 
  run: async (client, message, args) => {
        if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "I Don't Have Proper Permissions To Use This Command!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `please mention someone to kick voice!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`This person not connected voice`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`kick voice successfully!`)
  }
}