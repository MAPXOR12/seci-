const { MessageEmbed, Util } = require('discord.js');
 
exports.run = async (client, message, args) => {
  const icon = message.guild.iconURL({size: 4096, dynamic: true});
  let notAnimated = []
  let animated = []
 
  await message.guild.emojis.cache.forEach(async emoji => {
      if (emoji.animated) animated.push(emoji.toString())
      else notAnimated.push(emoji.toString())
  })
 
  if (!animated[0]) animated = ['None']
  if (!notAnimated[0]) notAnimated = ['None'];
  const allEmojis = `
  **Animated:**
  ${(animated.join(' ') + ' ')}
  **Not animated:**
  ${(notAnimated.join(' ') + ' ')}
  `;
  const [first, ...rest] = Util.splitMessage(allEmojis, { maxLength: 2047, char: ' ' });
  const embed = new MessageEmbed()
  .setDescription(first)
  .setColor(message.member.displayHexColor)
  .setThumbnail(icon)
  .setAuthor(`${message.guild.name}'s emoji(s)`, client.user.displayAvatarURL())
  if (rest.length) {
    await message.channel.send(embed);
    const lastContent = rest.splice(rest.length - 1, 1);
    for (const text of rest) {
      const embed1 = new MessageEmbed()
      .setColor(message.member.displayHexColor)
      .setDescription(text)
      await message.channel.send(embed1)
    };
    const embed3 = new MessageEmbed()
    .setColor(message.member.displayHexColor)
    .setDescription(lastContent)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    return message.channel.send(embed3);
  } else {
    embed.setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    return message.channel.send(embed);
  }
}
exports.help = {
  name: "emojis",
  description: "Display all emojis avaliable on the server",
  usage: "emojis",
  example: ["emojis"]
};
 
exports.conf = {
  aliases: ["emoji", "guild-emojis"],
  cooldown: 5,
  guildOnly: true,
 
  channelPerms: ["EMBED_LINKS"]
};