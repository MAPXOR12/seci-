const Discord = require("discord.js");
 
const flags = {
  DISCORD_EMPLOYEE: "Discord Staff",
  DISCORD_PARTNER: "Discord Partner",
  BUGHUNTER_LEVEL_1: "Bug Hunter (Level 1)",
  BUGHUNTER_LEVEL_2: "Bug Hunter (Level 2)",
  HYPESQUAD_EVENTS: "HypeSquad Events",
  HOUSE_BRAVERY: "House of Bravery",
  HOUSE_BRILLIANCE: " House of Brilliance",
  HOUSE_BALANCE: " House of Balance",
  EARLY_SUPPORTER:
    " Early Supporter",
  TEAM_USER: "Team User",
  SYSTEM: "System",
  VERIFIED_BOT: "Verified Bot",
  VERIFIED_DEVELOPER: "Verified Bot Developer",
  HEADWAY_OWNER: "Headway Owner",
  HEADWAY_COOWNER: "🛠️ Headway Co-Owner",
  HEADWAY_DEV: "💻 Headway Developer",
  HEADWAY_STAFF: "Headway Staff",
  HEADWAY_PARTNER: "Headway Official Partner",
  PLOVER_CEO: "Plover CEO",
};
let HeadwayStaff = [
  "473255635689930764",
  "302457454846017546",
  "315534526988156928",
  "230857721128288259",
  "446114292186742804",
  "647981740568084490",
];
let HeadwayPartners = [
  "530279594016636938",
  "457805013474082817",
  "441912852710948864",
];
module.exports.run = async (client, message, args) => {
  let user;
  if (args[0]) {
    user = message.mentions.users.first() || client.users.cache.get(args[0]);
  } else {
    user = message.author;
  }
  let userFlags = user.flags.toArray();
  if (user.id === "739287402551443527") {
    userFlags.push("PLOVER_CEO");
  } else if (user.id === "302457454846017546") {
    userFlags.push("HEADWAY_COOWNER");
  } else if (user.id === "230857721128288259") {
    userFlags.push("HEADWAY_OWNER");
  } else if (user.id === "473255635689930764") {
    userFlags.push("HEADWAY_DEV");
  }
  if (HeadwayStaff.includes(user.id)) {
    userFlags.push("HEADWAY_STAFF");
  }
  if (HeadwayPartners.includes(user.id)) {
    userFlags.push("HEADWAY_PARTNER");
  }
  if (!user.bot) var abot = "Normal user";
  if (user.bot) var abot = "Bot";
 
  const member = message.guild.member(user);
  var regdate = new Date(user.createdAt)
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  var joindate = new Date(member.joinedAt)
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${user.tag}`, user.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL())
    .addField("Username: ", `${user.username}`, true)  
    .addField("Registered: ", regdate, true)
    .addField("Joined: ", joindate, true)
    .addField("User Type: ", abot, true)
    .addField(
      `Flags:`,
      `${
        userFlags.length
          ? userFlags.map((flag) => flags[flag]).join(", ")
          : "None"
      }`
    )
    .setColor([
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ])
    .setFooter(`Requested By: ${message.author.tag}`);
  message.channel.send(embed);
  return;
};
//owo
module.exports.help = {
  name: "badge",
};