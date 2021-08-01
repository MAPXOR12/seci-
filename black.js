

const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { Attachment } = require("discord.js");
const client = new Client({ disableEveryone: true });
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const YouTube = require("simple-youtube-api");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const fetch = require("node-fetch");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const db = require("quick.db");
const dateFormat = require("dateformat");
var table = require("table").table;
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const ytdl = require("ytdl-core");
const cmd = require("node-cmd");
const queue = new Map();
const imdb = require("imdb-api");
const Enmap = require("enmap");
const cooldown = new Set();
const cdtime = 5;
const prefix = "T"
client.login("Nzg0MzAzNzU2OTI1NDY4NzEz.X8nVyw.Ozw917_1xQCmjNOoUWVjvDOGrY4")

let channelc = JSON.parse(fs.readFileSync('./channelc.json' , 'utf8'));
let channeld = JSON.parse(fs.readFileSync('./channeld.json' , 'utf8'));
let antiban = JSON.parse(fs.readFileSync('./antiban.json' , 'utf8'));
let antiroleD = JSON.parse(fs.readFileSync('./antiroleD.json' , 'utf8'));
let antiroleC = JSON.parse(fs.readFileSync('./antiroleC.json' , 'utf8'));
let antikick = JSON.parse(fs.readFileSync('./antikick.json' , 'utf8'));
client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
    console.log(client.guilds.cache.map(c => `${c.name} : ${c.me.hasPermission(8)} : ${c.memberCount}`));
  client.user.setActivity(`Type: ${PREFIX}help`, );
   
  console.log(`PLAYING`);
});



client.on('message', message => {
            if(message.content.startsWith(prefix + "tChannelC on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channelc[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelC is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channelc[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./channelc.json", JSON.stringify(channelc), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti channelC off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channelc[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelC is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channelc[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./channelc.json", JSON.stringify(channelc), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti channelD on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channeld[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelD is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channeld[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./channeld.json", JSON.stringify(channeld), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti channelD off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channeld[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelD is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channeld[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./channeld.json", JSON.stringify(channeld), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti ban on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' ); 
        antiban[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ban is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiban[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antiban.json", JSON.stringify(antiban), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti ban off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antiban[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ban is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiban[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antiban.json", JSON.stringify(antiban), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti kick on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' ); 
        antikick[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle kick is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antikick[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antikick.json", JSON.stringify(antikick), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti kick off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antikick[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle kick is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antikick[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antikick.json", JSON.stringify(antikick), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti roleD on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );     
        antiroleD[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle roleD is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleD[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antiroleD.json", JSON.stringify(antiroleD), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti roleD off")) {
                if(!message.channel.guild) return;
                         if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antiroleD[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle antiRoleD is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleD[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antiroleD.json", JSON.stringify(antiroleD), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti roleC on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );     
        antiroleD[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle roleC is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleC[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antiroleC.json", JSON.stringify(antiroleC), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "Anti roleC off")) {
                if(!message.channel.guild) return;
                         if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antiroleC[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle antiRoleC is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleC[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antiroleC.json", JSON.stringify(antiroleC), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })


let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID) {
      let embeeed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Error :x:")
        .setDescription("**SORRY JUST FOR ONWER SHIP**")
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
      return message.channel.send(embeeed);
    }
    {
      let black = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Erorr :x:")
        .setDescription("**SEND NUMBER**")
        .setFooter("Protection black system")
        .setColor("9e1c36");

      {
        let black2 = new Discord.MessageEmbed()
          .setThumbnail(message.guild.iconURL())
          .setTitle("Error :x:")
          .setDescription("**JUST SEND NUMBER*")
          .setColor("9e1c36");
 
        if (message.content.startsWith(prefix + "anti ban")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].banLimit = num;
          {
            let banLimit1 = new Discord.MessageEmbed()
              .setThumbnail(message.guild.iconURL())
              .setTitle("Protection + Anti ban")
              .setDescription(
                `Changed to : **${config[message.guild.id].banLimit}**`
              )
              .addField("By", message.author.tag)
              .addField("Server", message.guild.name)
              .setFooter("Protection black system")
              .setColor("RED");
            message.channel.send(banLimit1);
          }
        }
        if (message.content.startsWith(prefix + "anti kick")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].kickLimits = num;
          let embedddd = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti kick")
            .setDescription(
              `Changed to : **${config[message.guild.id].kickLimits}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embedddd);
        }
if (message.content.startsWith(prefix + "anti roleD")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].roleDelLimit = num;
          let embeddddddddd = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti roleD")
            .setDescription(
              `Changed to : **${config[message.guild.id].roleDelLimit}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embeddddddddd);
        }
        if (message.content.startsWith(prefix + "anti roleC")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].roleCrLimits = num;
          let embeed = new Discord.MessageEmbed()
            .setTitle("Protection + Anti roleC")
            .setDescription(
              `Changed to : **${config[message.guild.id].roleCrLimits}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embeed);
        }
        if (message.content.startsWith(prefix + "anti channelD")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].chaDelLimit = num;
          let embeeed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + ChannelD")
            .setDescription(
              `Changed to : **${config[message.guild.id].chaDelLimit}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embeeed);
        }
if (message.content.startsWith(prefix + "anti channelC")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].chaCrLimit = num;
          let embd = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti channelC")
            .setDescription(
              `Changed to : **${config[message.guild.id].chaCrLimit}**`
            )
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(embd);
        }
        if (message.content.startsWith(prefix + "anti time")) {
          if (!num) return message.channel.send(black);
          if (isNaN(num)) return message.channel.send(black2);
          config[message.guild.id].time = num;
          let emb = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle("Protection + anti time")
            .setDescription(`Changed to : **${config[message.guild.id].time}**`)
            .addField("By", message.author.tag)
            .addField("Server", message.guild.name)
            .setFooter("Protection black system")
            .setColor("RED");
          message.channel.send(emb);
        }
      }
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
});
client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({     
     type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
           if (!channelc[channel.guild.id])
      channelc[channel.guild.id] = {
        onoff: "Off"
      };
    if (channelc[channel.guild.id].onoff === "Off") return; 
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `** | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
if (!channeld[channel.guild.id])
      channeld[channel.guild.id] = {
        onoff: "Off"
      };
    if (channeld[channel.guild.id].onoff === "Off") return; 
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
 
      channel.guild.members
        .cache.get(entry.id)
        .ban()
        .catch(e =>         
          channel.guild.owner.send(`**${entry.username} Has Many Delete channel in A server ${channel.guild.name}**`)             
    
        );
 
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
 
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
if (!antiroleD[channel.guild.id])
      antiroleD[channel.guild.id] = {
        onoff: "Off"
      };
    if (antiroleD[channel.guild.id].onoff === "Off") return; 
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `** | ${entry.username} Tryed To \`Delete\` Many \`Rolea\` in A server ${channel.guild.name}.**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
 
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
               if (!antiroleC[channel.guild.id])
      antiroleC[channel.guild.id] = {
        onoff: "Off"
      };
    if (antiroleC[channel.guild.id].onoff === "Off") return; 
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**$ | ${entry.username} Tryed To \`Create\` Many \`Roles\` in A server [${channel.guild.name}].**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
if (!antiban[guild.guild.id])
      antiban[guild.guild.id] = {
        onoff: "Off"
      };
          if (antiban[guild.guild.id].onoff === "Off") return; 
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.cache.get(entry.id).ban().catch(e => guild.guild.owner.send(`**⇏ | ${entry.username} He Tried To Ban Many People in A server [${user.guild.name}].**`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
            if (!antikick[guild.guild.id])
      antikick[guild.guild.id] = {
        onoff: "Off"
      };
          if (antikick[guild.guild.id].onoff === "Off") return; 
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.guild.owner.send(
            `** | ${entry.username} Tryed To \`Kick\` Many \`Members\` in A server ${user.guild.name} .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});


var antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8"));
let saveAbot = () => {
  fs.writeFileSync(
    "./antibots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};




client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    antibots[message.guild.id] = {
      onoff: "on"
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**🔐 Sorry just For Owner ship**"
      );
    antibots[message.guild.id] = {
      onoff: "on"
    };
    saveAbot();
    message.channel.send("**AntiBots Join Is On 🔐 **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**🔐 Sorry Just For owner ship**"
      );
    antibots[message.guild.id] = {
      onoff: "off"
    };
    saveAbot();
    message.channel.send("**AntiBots Join Is Off 🔓 **");
  }
  saveAbot();
});
 client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  saveAbot();
  })
  
client.on('message', message => {
  if(message.content.startsWith(`<@${client.user.id}>`)) {
    if(message.author.bot || message.channel.type == "dm") return
    let mention = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(message.guild.iconURL())
    .setColor('RANDOM')
    .setDescription(`**Hey There,\nSee my all commands by \`${prefix}help\`**`)
    message.channel.send(mention)
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "settings")) {
  if (message.author.id !== message.guild.ownerID) return message.reply("Just For Owner ship")
    var blackjack = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(`**__${message.guild.name}__ , Server Settings**`)

      .addField(
        "Ban Limit Info",
        `
**• | Count : __\`${config[message.guild.id].banLimit} \`__**
`
      )
      .addField(
        "Kick Limit Info",
        `
**• | Count : __\`${config[message.guild.id].kickLimits} \`__**
`
      )
      .addField(
        "Role Delete Limit Info",
        `
**• | Count : __\`${config[message.guild.id].roleDelLimit} \`__**
`
      )

      .addField(
        "Role Create Limit Info",
        `
**• | Count : __\`${config[message.guild.id].roleCrLimits} \`__**
`
      )
      .addField(
        "Channel Delete Limit Info",
        `
**• | Count : __\`${config[message.guild.id].chaDelLimit} \`__**
`
      )
      .addField(
        "Channel Create Limit Info",
        `
**• | Count : __\`${config[message.guild.id].chaCrLimit} \`__**
`
      );

    message.channel.send(blackjack);
  }
});


client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    
    let help = new Discord.MessageEmbed()
      .setColor(`#b00c00`)
      .setImage(`https://cdn.discordapp.com/attachments/784182278481772564/854688687807529020/New_Project_99AD184.gif`)
      .setDescription(`
**__ Help Commands __**



 🌍**»__ Public Commands __ **

\`r/rps - r/vote\`
\`r/uptime - r/ping\`
\`r/about - r/weather\`
\`r/listbots - r/roles\`
\`r/userRole - r/support\`
\`r/invite - r/listEmoji\`
\`r/report - r/ninvites\` 
\`r/perms - r/serverinfo\`
\`r/userinfo - r/server avatar\`
\`r/avatar - r/day\`
\`r/covid all - r/covid\` : **[Country]**

⚡**»__ Moderation __ **

\`r/hide - r/show\`
\`r/ban - r/unban \`
\`r/move - r/embed\`
\`r/kick - r/vkick\`
\`r/mute - r/unmute\`
\`r/lock - r/unlock\`
\`r/clear - slowmode\`
\`r/lockall - r/unlockall\`
\`r/ENrules - r/KRrules - r/ARrules\`
\`r/warn - r/warning - r/removewarn\`
💦**»__ Anti on off__**

\`r/Anti ban\` : **on / off**
\`r/Anti kick\` : **on / off**
\`r/Anti roleC\` : **on / off**
\`r/Anti roleD\` : **on / off**
\`r/Anti channelC\` : **on / off**
\`r/Anti channelD\` : **on / off**

🛡️**»__ Security __**

\`r/anti bot\` : **[on-off]**
\`r/anti ban\` : **[Number]**
\`r/anti kick\` : **[Number]**
\`r/anti roleC\` : **[Number]**
\`r/anti roleD\` : **[Number]**
\`r/anti channelC\` : **[Number]**
\`r/anti channelD\` : **[Number]**
\`r/punishment\`
\`r/settings\`
      
      `);
    message.channel.send(help);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "mvall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voice.channel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voice.channel.id;
    var m = message.guild.members.cache.filter(m => m.voice.channel);
    message.guild.members.cache.filter(m => m.voice.channel).forEach(m => {
        m.voice.setChannel(author);
      })
    const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setTitle("**Done Chek Move all**")
        .addField("Moderation", message.author.tag)
        message.channel.send(embed);
  }
});

var wlcinv = require("./invite.json");
function saveInviter() {
    fs.writeFileSync("./invite.json", JSON.stringify(wlcinv, null, 4));
}
client.on('message', message => {
           if (!message.channel.guild) return;
    let room = message.content.split(' ').slice(1).join(" ")
    let channel = message.guild.channels.cache.find(c => c.name === `${room}`) || message.mentions.channels.first()
    if(message.content.startsWith(prefix + "setInvite")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('**Please Type The Name Channel Or Mention**')
if(!channel) return message.channel.send('**Cant Find This Channel**')
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTitle('**✅Done Check The Log Code Has Been Setup**')
.addField('Channel', `${room}`)
.addField('Server', `${message.guild.name}`)
.addField('Requested By', `${message.author}`)
.setColor("RANDOM")
.setFooter(`${client.user.username}`)
.setTimestamp()
message.channel.send(embed)
wlcinv[message.guild.id] = {
channel: channel.name,
}
saveInviter()
}})
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleInviter")) {
    if (!message.channel.guild) return message.reply("**This Command For Serverr**");
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author}, Sorry You Need \`MANAGE_GUILD\` for use this command`);
    if (!wlcinv[message.guild.id])
      wlcinv[message.guild.id] = {
        onoff: "Off"
      };
    if (wlcinv[message.guild.id].onoff === "off") return [
            message.channel.send(`**The Inviter Is __ON__ !**`),
      (wlcinv[message.guild.id].onoff = "on")
    ];
    if (wlcinv[message.guild.id].onoff === "on") return [
      message.channel.send(`**The Inviter Is __ON__ !**`),
      (wlcinv[message.guild.id].onoff = "off")
    ];
    saveInviter()
  }
});
const invites = {};
 
const wait = require('util').promisify(setTimeout);
 
client.on('ready', () => {
  wait(1000);
 
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
 
client.on('guildMemberAdd', member => {
    if (!wlcinv[member.guild.id])
    wlcinv[member.guild.id] = {
      onoff: "Off"
    };
  if (wlcinv[member.guild.id].onoff === "Off") return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(c => c.name == wlcinv[member.guild.id].channel)
    let memberavatar = member.user.avatarURL()
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .setDescription(`
Welcome To The Server **${member.guild.name}**
 
Name Member: ${member}
 
You Are The Member: ${member.guild.memberCount}
 
Invited By: ${inviter.tag}
 
        `)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        channel.send(embed);
});
   saveInviter()
  }); 

client.on('message', message => {
    if (message.content.startsWith(prefix + "se gif")) {
        var bj = "BLACK JACK"
        var args = message.content.split(" ").slice(2);
          let id = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.exec(args)  
    if (!id) return message.reply('You did\'nt input a valid emoji or it is a default Discord emote!');
            message.channel.send('The Emoji Gif', { files: ['https://cdn.discordapp.com/emojis/' + id + '.gif'] });
    }
})
client.on('message', message => {
    if (message.content.startsWith(prefix + "se static")) {
     var bj = "BLACK JACK"
        var args = message.content.split(" ").slice(2);
          let id = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.exec(args)  
    if (!id) return message.reply('You did\'nt input a valid emoji or it is a default Discord emote!');
            message.channel.send('The Emoji Gif', { files: ['https://cdn.discordapp.com/emojis/' + id + '.png'] });
    }
})

client.on('message', message => {
    if (message.content.startsWith(prefix  + 'say')) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Do You Not Have Premission Adminstrator")
   var say = message.content.split(" ").slice(1).join(" ");
    if(!say) return message.reply("**Please Type Message For say**")
        message.channel.send(say);
}
    if (message.content.startsWith(prefix  + "embed")) {
   var args = message.content.split(" ").slice(1).join(" ");
   if(!args) return message.reply("**Please Type Message For say Embed**")
   const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setDescription(args)
        message.channel.send(embed);
}
});

client.on('message',msg => {
    if(msg.content.indexOf(prefix) !== 0) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const roleOrPrem = '  '; 
    if(!msg.guild.id) return;
    if(msg.author.bot) return;
    if(command == 'roles') 
    {
        if(!msg.member.roles.cache.get(roleOrPrem) && !msg.member.hasPermission(roleOrPrem)) return;
        if(!msg.guild.me.hasPermission(['MANAGE_ROLES'])) return msg.channel.send('I can\'t get server roles,I need premission `MANAGE_ROLES`').then(m=>m.delete(5000));
       let roles = msg.guild.roles.cache.filter(r=> r.name != '@everyone').sort((a,b)=> a.id - b.id).map( r => {
            if(r.name.length < 22) 
            {
                return `${r.name + Array(22 - (r.name.length)).map(a=> ' ').join(' ')+ r.members.size} members`
            } 
            else 
            {
                return `${r.name + '  ' + r.members.size} members`
            }
        })
        roles.push('@everyone            0 members')
        msg.channel.send(roles.join('\n'),{split:true,code:true})
    }
})

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinvites')) {
      
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL())
  .setAuthor(message.guild.name,message.guild.iconURL())
  .setColor("#FF0000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "allbots") {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**All bots in server ${
          message.guild.members.cache.filter(m => m.user.bot).size
        }**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e);
  }
});

client.on('message', rw => {
  if (rw.content.startsWith('b!vban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('**:rolling_eyes: - I cant find this member **'); 
rw.guild.channels.cache.forEach(c => {
c.createOverwrite(men.id, { 
          CONNECT: false
})
    })
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://image.flaticon.com/icons/svg/1810/1810742.svg")
          
client.users.cache.get(men.id).send(embed)
const Embed11 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL())
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://image.flaticon.com/icons/svg/1810/1810742.svg")
rw.channel.send(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه 
client.on('message', rw => {
  if (rw.content.startsWith('b!unvban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.cache.forEach(c => { 
 c.createOverwrite(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`) 
.setThumbnail("https://image.flaticon.com/icons/svg/443/443138.svg")
          
client.users.cache.get(men.id).send(embed)
const Embed11 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL())
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://image.flaticon.com/icons/svg/443/443138.svg")
rw.channel.send(Embed11).then(rw => {rw.delete(15000)})
    } 
})

client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mention = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mention) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mention.voice.channel) return message.channel.send(`⛔ | *${mention.user.tag}* is not in a voice channel!`);
mention.voice.setMute(true).then(() => {
const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setTitle(`Successfully Muted ${mention} :+1:`)
        .addField("Moderation", message.author.tag)
        .addField("Member Vmute", mention)
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send(embed);    
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unvmute")) {
var mention = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mention) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mention.voice.channel) return message.channel.send(`⛔ | *${mention.user.tag}* is not in a voice channel!`);
mention.voice.setMute(false).then(() => {
const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setTitle(`Successfully UnMuted ${mention} :+1:`)
        .addField("Moderation", message.author.tag)
        .addField("Member Vmute", mention)
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send(embed);   
}).catch(console.error);
}
});

client.on("message", message => {
  if (message.content === prefix + "anti") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID) return
    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.username,message.author.avatarURL())
      .setFooter(`${client.user.username}`)
      .setTimestamp()
      .setDescription(`
**Security Number**
\`${prefix}anti kick\`: **Number**
\`${prefix}anti ban\`: **Number**
\`${prefix}anti channelD\`: **Number**
\`${prefix}anti channelC\`: **Number**
\`${prefix}anti roleD\`: **Number**
\`${prefix}anti roleC\`: **Number**
**Security On/Off**
\`${prefix}antibots\`: **on-off**
**Security**
\`${prefix}settings\`
      `)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));

    message.channel.send({ embed });
  }
});

client.on("message", message => {
  if (message.content === prefix + "toggles") {
    if (cooldown.has(message.author.id)) {
      return message.channel.send(`You have to wait 5 seconds`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**You must have a higher role use this command**"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.username,message.author.avatarURL())
      .setFooter(`${client.user.username}`)
      .setTimestamp()
      .setDescription(`
\`${prefix}tban on/off\`
\`${prefix}tkick on/off\`
\`${prefix}tChannelC on/off\`
\`${prefix}tChannelD on/off\`
\`${prefix}troleC on/off\`
\`${prefix}troleD on/off\`
\`${prefix}togglelog on/off\`
      `)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embed });
  }
});

client.on("message", message => {
  let args = message.content.split(" ");
  if (args[0] === prefix + "hightRole") {
    let user =
      message.mentions.users.first() ||
      client.users.cache.get(args[1]) ||
      message.author;
    if (!user) return message.channel.send(`> ❎ | I Can't Find This User.`);
    let height = message.guild.member(user).roles.highest.id;
    let heightR = message.guild.roles.cache.find(r => r.id === height);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${user.username} info`)
      .addField(`Height Role:`, heightR)
      .setFooter(
        `Requsted By ${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setThumbnail(user.displayAvatarURL());
    message.channel.send(embed);
  }
});




client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
  let args = message.content.split(" ").slice(1)
    if (message.content === `${prefix}avatar`){
      
      var embed1 = new Discord.MessageEmbed()
      .setTitle(`Avatar Link`)
      .setURL(user.avatarURL())
      .setImage(user.avatarURL())
      .setFooter(message.author.username, message.author.avatarURL())
      if(user.avatarURL == null) {
          message.channel.send('**Couldn\'t find the avatar of member **``'+user.username+'#'+user.discriminator+'``')
      }else{
          message.channel.send(embed1);
      }
    }
     
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "my perms")) {
    if (!message.channel.guild) return;
    var perms = JSON.stringify(
      message.channel.permissionsFor(message.author).serialize(),
      null,
      4
    );
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(":tools: Permissions")
      .addField("Your Permissions:", perms);
    message.channel.send({ embed: embed });
  }
});

client.on("message", message => {
  if(message.content.startsWith(prefix + "nick")){
      if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("**You Dont hAve Premission MANAGE NICKNAMES**")
  var user = message.mentions.members.first();
  var args = message.content.split(" ").slice(2);
  var nick = args.join(" ");
  if(!user || !args) return message.channel.send(`**${prefix}nick @tag NickName**`);
  message.guild.member(user.user).setNickname(`${nick}`);
  const blackj = new Discord.MessageEmbed()
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("**Done The Changed NickName**")
  .addField("Name User", user)
  .addField("Nickname New", nick)
  .addField("Moderation", message.author.tag)
  .setColor("RANDOM")
  message.channel.send(blackj)
  }
  });

client.on('message', message => { //Black jack
    if (!message.channel.guild) return;
if(message.content == prefix + 'boosts') //Black jack
var Black = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setFooter(message.author.username, message.author.avatarURL())
.addField('Server Name',`${message.guild.name}`)
.addField('Boost Count',` ${message.guild.premiumSubscriptionCount}`)
.setColor("RANDOM")
message.channel.send(Black);
}); 

client.on('message', message => {
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return   
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.MessageEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "TIME AND DATE")
                .setColor('RANDOM')
                .setFooter("BLACK SECURITY PRIME")
                .setFooter(message.author.username, message.author.avatarURL())
                 .addField('Time',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
              
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.send(Date15);
        }
    });

client.on("message", message => {
    if (message.content.startsWith(prefix + "rules")) {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
     const blackjack = new Discord.MessageEmbed() 
         .setColor("BLACK")
         .setTitle("RULES")
         .setImage("https://media.discordapp.net/attachments/644265220449107968/646324616536784897/image0-16.png")
         .setFooter("RULES")
         .setDescription(`
**__Rules|یاسا__**
 
سەرتا سلاو تان لێبێ 
ئێمە وەک هەریەک لە سێرڤەرەکانی کە یاسای تایبەت بە خۆمان هەیە 
1. نابێت قسەی ناشیاو یان جنێوێکێک بدەی چونکە یەکسەر باندت ئەکەین
2. نابێت لە ڤۆیسی گشتی بۆت بەکاربێنن
3. ریکلام کردن بە هەموو شێوەک قەدەخەیە جگە لە گۆرینەوەی
4. نابێت بە هیچ شێوەیەک بێرێزی بە تاکێکی ستافەکە بکەیت
5. بێزارکردنی پلەیەر و میوان قەدەخەیە
6. باسکرنی سیاسەت بە هەموو شێوەیەک قەدەخەیە
7. شارچێتی قەدەخەیە
8. سوکایەتی کر دن بە یەک قەدەخەیەو یەکسەر باندە
9. زۆر دووبارە کردنەوەی مەسج یاجود سپام کردن قەدەخەیە
لەگەل رێزماندا....!
   `)
   message.channel.send(blackjack)
 
   }
   });

client.on("message", async message => {
  if (message.content.startsWith(prefix + "settopic")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**You need Administrator permission to use this command!**"
      );
    let topic = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!topic) return message.channel.send("**Shte bnwsa bo danany Topic**");
    message.channel.setTopic(topic);
    const embed = new Discord.MessageEmbed()
      .setTitle("**Done check Description channel**")
      .addField("Message", `${topic}`)
      .addField("Channel", message.channel.name)
      .addField("By", message.author.tag)
      .setColor("RANDOM")
      .setFooter("BY BLACK JACK");
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}move <@mention or id>**`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** has been moved to **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`✅  **-** **Done Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          ` :x: **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});


client.on("message", msg => {
  if (msg.content === prefix + "hide all") {
    if (!msg.member.hasPermission("MANAGE_CHANNELS"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
      });
    });
    msg.channel.send("Done check hide all");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "unhide all") {
    if (!msg.member.hasPermission("MANAGE_CHANNELS"))   return;
    msg.guild.channels.cache.forEach(c => {
      c.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
      });
    });
    msg.channel.send("done check hide all");
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    let blackjack = "created by black jack";
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permissions**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** locked Channel :lock:**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    let blackjack = "created by black jack";
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** Unlocked Channel 🔓**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", message.channel.name)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
});
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel hided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔒");
    });
  }
});
client.on("message", message => {
  if (message.content === prefix + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unhided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔓");
    });
  }
});

client.on('message', message => {
 
if(message.content.startsWith(prefix + "mute")) {
if(!message.member.hasPermission('MUTE_MEMBERS'))  return message.channel.send(" **you need the** ``MUTE_MEMBERS `` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  var role = message.guild.roles.cache.find(role => role.name === "Muted")
  if(role) return message.reply("**Please Make Role [Muted]**")
  let mute = new Discord.MessageEmbed()
  .setAuthor(message.author.username,message.author.avatarURL())
.setDescription(`**${mention} | Has been Muted From The Server! **`)
   .setColor('#000000')
.setTimestamp()
 
  .setFooter(mention.user.username,mention.user.avatarURL())
   mention.roles.add(role)
  message.channel.send(mute)
}});
 
 
 
 
client.on('message', message => {
 
if(message.content.startsWith(prefix + "unmute")) {
if(!message.member.hasPermission('MUTE_MEMBERS'))  return message.channel.send(" **you need the** ``MUTE_MEMBERS `` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  var role = message.guild.roles.cache.find(role => role.name === "Muted")
    if(role) return message.reply("**Please Make Role [Muted]**")
  let unmute = new Discord.MessageEmbed()
  .setAuthor(message.author.username,message.author.avatarURL())
.setDescription(`**${mention} | Has been UnMuted From The Server! **`)
    .setColor('#000000')
.setTimestamp()
 
  .setFooter(mention.user.username,mention.user.avatarURL())
   mention.roles.remove(role)
  message.channel.send(unmute)
}});



client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    if (!message.channel.guild) return;
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
       
    const embed = new Discord.MessageEmbed()
        .setThumbnail(heg.avatarURL())
        .setTitle(`**User Info ${message.author.tag}**`)
        .addField("**ID**", `${heg.id}`, true)
        .addField("**Name**", `${heg.username}`, true)
        .addField('**Discrim Account**',"**#" +  `${heg.discriminator}**`,true)
        .addField("**Created Account At**", `${heg.createdAt}`, true)
        .addField("**Time Join Server**", message.member.joinedAt.toLocaleString())    
        .addField("**Bot**", `${heg.bot}`, true)
        .addField("**Status** ", heg.presence.status, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM")      
        .setTimestamp()
 
    message.channel.send(embed);
  }
});





client.on("message", message => {
if (message.content.startsWith(prefix + "botinfo")) {
message.channel.send({
embed: new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor("#00F0FF")
.setTitle("INFO |__=_=__|")
.addField(
"``My Ping``",
[`${Date.now() - message.createdTimestamp}` + "MS"],
true
)
.addField("``Servers``", [client.guilds.cache.size], true)
.addField("``Channels``", `[ ${client.channels.cache.size} ]`, true)
.addField("``Users``", `[ ${client.users.cache.size} ]`, true)
.addField("``My Name``", `[ ${client.user.tag} ]`, true)
.addField("``My ID``", `[ ${client.user.id} ]`, true)
.addField("``OWNER``", `[ <@670647563627659306> ]`, true)
.addField("``ADMIN``", `[ <@724891404874285117> ]`, true)
.addField("``My Prefix``", `[ ${prefix} ]`, true)
.addField("``My Language``", `[ JavaScript ]`, true)
.addField("``Bot Version``", `[ 12.4.0 ]`, true)
});
}
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});



client.on('message', message => {
     if(message.content.startsWith(prefix + "clear")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need \`\`MANAGE_MESSAGES\`\` permission');
       const e = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setThumbnail(message.author.avatarURL())
       .addField("Moderation", message.author.tag)
       .setFooter(`Requested | ${message.author.tag}`, message.author.avatarURL())
       .setTimestamp()
       .setTitle("Please provide a number");
  if (!args[0]) return message.channel.send(e);
 
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setColor("#FF0000")
      .setFooter(`Requested | ${message.author.tag}`, message.author.avatarURL())
      .setTimestamp()
      .setTitle(`Cleared ${args[0]} messages.`)  
      .addField("Moderation", message.author.tag)
    message.channel.send({ embed })


 
    
   
  });
}
 
});

client.on("message", async message => {
  if (
    message.content.includes(
      "@everyon",
      "@here",
    )
  ) {
 if(message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.cache.find(
      role => role.name === `Muted By BlackSestam`
    );
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Muted By BlackSestam",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(muterole, {
            SEND_TTS_MESSAGES: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            VIEW_CHANNEL: false,
            SPEAK: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    message.member.roles.add(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **`, `**Reason : Uses mention Everyone Or Here**`)
      .setColor("c91616")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

 client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});


client.on("message", black => {
  if (black.content.startsWith(prefix + "server")) {
    if (cooldown.has(black.author.id)) {
      return black.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(black.author.id);

    setTimeout(() => {
      cooldown.delete(black.author.id);
    }, cdtime * 1000);
    var blackjack = new Discord.MessageEmbed()
      .setAuthor(black.guild.name)
      .setThumbnail(black.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("**Server Name:**", `${black.guild.name}`)
      .addField("**Owner Server:**", `<@${black.guild.ownerID}>`)
      .addField("**Server ID:**", `${black.guild.id}`)
      .addField("**Created:**", `${black.guild.createdAt.toLocaleString()}`)
      .addField("**Emojis**", `${black.guild.emojis.cache.size}`, true)
      .addField("**Members:**", `${black.guild.memberCount}`)
      .addField("**Channels:**", `${black.guild.channels.cache.size}`)
      .addField("**Region**:", `${black.guild.region}`)
      .addField(`**Boosts**`, `${black.guild.premiumSubscriptionCount}`, true)
      .addField("**Roles:**", ` ${black.guild.roles.cache.size}`)
      .addField("AFK Timeout", black.guild.afkTimeout / 60 + ' minutes', true)
      .setFooter(`Requested | ${black.author.tag}`, black.author.avatarURL())
      .setColor("RANDOM")
      .setTimestamp();
    black.channel.send(blackjack);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "kick")) {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You dont have premission**")
    let tag = message.mentions.members.first();
    if(!tag) return message.reply('**Please Mention Member**')
    let args = message.content.split(" ").slice(1); 
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!args) return message.reply('**Please Mention**')
    if(!reason) return message.reply('**Write Reason For Kick Member**')
 
    var blackjack = 'Black sestam'
    const kick = new Discord.MessageEmbed()
    .setTitle('**Kicked In a Server**')
    .addField('Guild', message.guild.name)
    .addField('Name member ', tag)
    .addField('Reason ', reason)
    .addField('Moderation', message.author.tag)
    .setFooter('BLACK SESTAM')
    .setColor("RANDOM")
    message.channel.send(kick)
    tag.kick();
  }})

client.on("message", message => {
  if (message.content.startsWith(prefix + "ban")) {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You dont have premission")
    let tag = message.mentions.members.first();
    if(!tag) return message.reply('**Please mention Member**')
    let args = message.content.split(" ").slice(1); 
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!args) return message.reply('**Please Mention Member**')
   if(!reason) return message.reply('**Write Reason For Ban Member**')

    var blackjack = 'Black sestam'
    const ban = new Discord.MessageEmbed()
    .setTitle('**Banned In a Server**')
    .addField('Guild', message.guild.name)
    .addField('Name member', tag)
    .addField('Reason ', reason)
    .addField('Moderation', message.author.tag)
    .setFooter('BLACK SESTAM')
    .setColor("RANDOM")
    message.channel.send(ban)
    tag.ban();
  }})

client.on('message', message => {
  if(message.content.startsWith(`${prefix}support`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Here")
    .setURL("https://discord.gg/MVWZ9hFw93")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send({embed})
  }
});
client.on('message', message => {
  if(message.content.startsWith(`b!invite`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Here")
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`)
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send({embed})
  }
});

client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('-quran')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=9-oGnGaI9Ps&t=8009s', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('-stop')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});



var log = require("./log.json");
function saveLog() {
    fs.writeFileSync("./log.json", JSON.stringify(log, null, 4));
}
client.on('message', message => {
           if (!message.channel.guild) return;
    let room = message.content.split(' ').slice(1).join(" ")
    let channel = message.guild.channels.cache.find(c => c.name === `${room}`) || message.mentions.channels.first()
    if(message.content.startsWith(prefix + "setLog")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('**Please Type The Name Channel Or Mention**')
if(!channel) return message.channel.send('**Cant Find This Channel**')
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTitle('**✅Done Check The Log Code Has Been Setup**')
.addField('Channel', `${room}`)
.addField('Server', `${message.guild.name}`)
.addField('Requested By', `${message.author}`)
.setColor("RANDOM")
.setFooter(`${client.user.username}`)
.setTimestamp()
message.channel.send(embed)
log[message.guild.id] = {
channel: channel.name,
}
saveLog()
}})
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "togglelog")) {
    if (!message.channel.guild) return message.reply("**This Command For Serverr**");
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author}, Sorry You Need \`MANAGE_GUILD\` for use this command`);
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "off") return [
      message.channel.send(`**The log Is __𝐎𝐍__ !**`),
      (log[message.guild.id].onoff = "on")
    ];
    if (log[message.guild.id].onoff === "on") return [
      message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
      (log[message.guild.id].onoff = "off")
    ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});



client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.cache.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;
 
  let messageDelete = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL());
 
  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.cache.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldMessage.content.startsWith("https://")) return;
 
  let messageUpdate = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.displayAvatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());
 
  logChannel.send(messageUpdate);
});
 
client.on("channelCreate", channel => {
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
    let channelCreate = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(channel.guild.name, channel.guild.iconURL());
    logChannel.send(channelCreate)
  })
});
 
 
 
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.cache.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
          "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
          "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
          oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newTopic);
    }
  });
});
 
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let channelDelete = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());
 
    logChannel.send(channelDelete);
  });
});
 
 
 
 
 
 
 
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let banInfo = new Discord.MessageEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let unBanInfo = new Discord.MessageEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(unBanInfo);
  });
});
 
 
 
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
    let roleCreate = new Discord.MessageEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleCreate);
  });
});
 
 
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let roleDelete = new Discord.MessageEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.cache.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.MessageEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.MessageEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateColor);
    }
  });
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	if(!oldMember.guild) return;
		        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldMember.guild.id].onoff === 'Off') return;
	var logChannel = oldMember.guild.channels.cache.find(c => c.name === `${log[oldMember, newMember.guild.id].channel}`);
	if(!logChannel) return;
 
	oldMember.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL();
		var userTag = logs.entries.first().executor.tag;
 
		if(oldMember.nickname !== newMember.nickname) {
			if(oldMember.nickname === null) {
				var oldNM = '`Old Name`';
			}else {
				var oldNM = oldMember.nickname;
			}
			if(newMember.nickname === null) {
				var newNM = '`New Name`';
			}else {
				var newNM = newMember.nickname;
			}
 
			let updateNickname = new Discord.MessageEmbed()
			.setTitle('**[UPDATE MEMBER NICKNAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL())
 
			logChannel.send(updateNickname);
		}
		if(oldMember.roles.size < newMember.roles.size) {
			let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
					        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember.guild.id].onoff === 'Off') return;
			let roleAdded = new Discord.MessageEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL())
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
					        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
 }
            if(log[oldMember.guild.id].onoff === 'Off') return;
			let roleAdded = new Discord.MessageEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL())
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
					        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
			let roleRemoved = new Discord.MessageEmbed()
			.setTitle('**[REMOVED ROLE FROM MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL())
			.setColor('RED')
			.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(roleRemoved);
		}
	})
  if(oldMember.guild.ownerID !== newMember.guild.ownerID) {
	  		        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
        if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
        let newOwner = new Discord.MessageEmbed()
		.setTitle('**[UPDATE GUILD OWNER]**')
		.setThumbnail(oldMember.guild.iconURL())
		.setColor('GREEN')
		.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
		.setTimestamp()
		.setFooter(oldMember.guild.name, oldMember.guild.iconURL())
 
		logChannel.send(newOwner);
	}
});
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
	if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
    if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
	var logChannel = voiceOld.guild.channels.cache.find(c => c.name === `${log[voiceOld, voiceNew.guild.id].channel}`);
	if(!logChannel) return;
 
	voiceOld.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userTag = logs.entries.first().executor.tag;
		var userAvatar = logs.entries.first().executor.avatarURL();
 
		if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
			let serverMutev = new Discord.MessageEmbed()
			.setTitle('**[VOICE MUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverMutev);
		}
		if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
		  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
			let serverUnmutev = new Discord.MessageEmbed()
			.setTitle('**[VOICE UNMUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverUnmutev);
		}
		if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
		  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.MessageEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL())
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL())
 
        logChannel.send(voiceJoin);
    }
 
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.MessageEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL())
 
        logChannel.send(voiceLeave); 
    }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
			let serverDeafv = new Discord.MessageEmbed()
			.setTitle('**[VOICE DEAF]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverDeafv);
		}	
if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
		  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
			let serverUndeafv = new Discord.MessageEmbed()
			.setTitle('**[VOICE UNDEAF]**')
			.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverUndeafv);
		}
	})
 
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
	  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
        if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
		let voiceLeave = new Discord.MessageEmbed()
		.setTitle('**[CHANGED VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL())
		.setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL())
 
		logChannel.send(voiceLeave);
	}
});


client.on("emojiCreate", function(emoji) {
  let channel = emoji;
     var update = emoji.guild.channels.cache.find(c => c.name === `${log[emoji.guild.id].channel}`);
  let embed = new Discord.MessageEmbed()
      .setAuthor(`${channel.guild.name}: Server Updated`, channel.guild.iconURL())
    .setColor("BLUE")
      .setDescription(`We have new emoji in the server => (${emoji})`)
update.send(embed)
});
client.on("emojiDelete", function(emoji) {
  let channel = emoji;
     var update = emoji.guild.channels.cache.find(c => c.name === `${log[emoji.guild.id].channel}`);
  let embed = new Discord.MessageEmbed()
      .setAuthor(`${channel.guild.name}: Server Updated`, channel.guild.iconURL())
      .setColor("BLUE")
      .setDescription(`We have new emoji in the server => (${emoji})`)
update.send(embed)
});
