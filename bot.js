const Discord = require("discord.js"); 
const MessageEmbed = require("discord.js");  
 //TONLYS TARAFINDAN KODLANMIŞTIR...
const _client = new Discord.Client({ fetchAllMembers: true });  
const client = global.client = _client
global.client = client;
 
const fs = require("fs");
const qdb = require("quick.db");
 

client.commands = new Discord.Collection();  
client.aliases = new Discord.Collection();  
fs.readdirSync("./commands").filter(file => file.endsWith(".js")).forEach(file => {
    let command = require(`./commands/${file}`);  
    client.commands.set(command.conf.command, command);  
    console.log(`[Command] ${file.replace(".js", "")} command loaded.`);  
    command.conf.aliases.forEach(aliases => {
    client.aliases.set(aliases, command)  
  })
});
 
fs.readdirSync("./events").filter(file => file.endsWith(".js")).forEach(file => {
    let event = require(`./events/${file}`);  
    client.on(event.conf.event, event.execute);  
    console.log(`[Event] ${file.replace(".js", "")} event loaded.`);  
});
const sayiEmojiler = {0: client.config.emoji.sıfır, 1: client.config.emoji.bir, 2: client.config.emoji.iki, 3: client.config.emoji.üç, 4: client.config.emoji.dört, 5: client.config.emoji.beş, 6: client.config.emoji.altı, 7: client.config.emoji.yedi, 8: client.config.emoji.sekiz, 9: client.config.emoji.dokuz };

  const emoji = global.emoji;
  client.emojiSayi = function(sayi) {
    var newMesaj = "";
    var arr = Array.from(sayi);
    for (var x = 0; x < arr.length; x++) {
      newMesaj += (sayiEmojiler[arr[x]] === "" ? arr[x] : sayiEmojiler[arr[x]]);
    }
    return newMesaj; 
  };

const discord = require("discord.js")

const { Client, Intents, Collection } = require('discord.js');

// const client = new discord.Client()

//config = require("./config.json")

const fs = require("fs")

const allIntents = new Intents(32509);

allIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);

const client = new Client({ intents: allIntents });

const { MessageActionRow, MessageButton } = require('discord.js');

//const { MessageActionRow, MessageButton } = require('discord.js');

const { resourceUsage } = require("process");

const { MessageEmbed } = require('discord.js');

client.on('ready', async () => {

  console.log(`${client.user.tag} is ready!`)

  //console.log(`${client.user.id} is ready!`)

});

var moment = require('moment');

// mesaj silme log

client.on("messageDelete", message => {

    //console.log(message)

      if (!message || message.partial) return

      if (typeof message.author === "undefined" ) return

      if (message.author && message.author.bot === true) return

      if (message.channel && message.channel.type !== "GUILD_TEXT") return

      // validate if it's from a guild

    const channel2 = client.channels.cache.get("kanalid")

      const messageDeletedEmbed = new MessageEmbed()

          .setColor("RANDOM")

          .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

          let user = message.author

          let avatar = user.displayAvatarURL({dynamic: true, size: 1024})

      var messageHadAttachment = message.attachments.map(x => x.proxyURL)[0]

      if (messageHadAttachment) { // if there is an attachement

          messageDeletedEmbed.setDescription(` <@${message.author.id}> üyesi <#${message.channel.id}> kanalında mesajını sildi. 

          

          **__silinen mesaj:__**

          silinen mesaj yoktur.

          

          **__silinen resim:__**

          ${message.attachments.map(x => x.proxyURL)}

  

  \`\`\`

Kanal: ${message.channel.name}  (${message.channel.id})

Kullanıcı: ${message.author.tag}  (${message.author.id})

Mesaj ID: ${message.id}

Atılma Tarihi: ${moment(message.createdAt).locale("tr").format('LLL')} \`\`\``)

           }

          else {

            messageDeletedEmbed.setDescription(` <@${message.author.id}> üyesi <#${message.channel.id}> kanalında mesajını sildi. 

          

            **__silinen mesaj:__**

            ${message.content.replace(/`/g, "'")}

  

            **__silinen resim:__**

            Silinen resim yoktur.

            

  \`\`\`

Kanal: ${message.channel.name}  (${message.channel.id})

Kullanıcı: ${message.author.tag}  (${message.author.id})

Mesaj ID: ${message.id}

Atılma Tarihi: ${moment(message.createdAt).locale("tr").format('LLL')}\`\`\``)

          }

          if(avatar.endsWith(".gif?size=1024")){

            messageDeletedEmbed.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))

          } else {

            messageDeletedEmbed.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

          }

       return channel2.send({ 

         embeds: [messageDeletedEmbed]

         }) // ({embeds: [embed]}) (messageDeletedEmbed)

    });

    // mesaj değiştirme log

    client.on("messageUpdate", (oldMessage, newMessage) => {

        if (oldMessage.author.bot === true) return

        if (oldMessage.channel.type !== "GUILD_TEXT") return

        if (newMessage.channel.type !== "GUILD_TEXT") return

        if (oldMessage.content === newMessage.content) return

      const messageEditedEmbed = new MessageEmbed()

      .setColor("RANDOM")

      .setAuthor(newMessage.author.username, newMessage.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

      

      .setDescription(` <@${newMessage.author.id}> üyesi <#${newMessage.channel.id}> kanalında mesajını düzenledi. 

      

      **__Düzenlenmeden Önce:__**

      ${oldMessage.content.replace(/`/g, "'")}

      

      **__Düzenlenlendikten Sonra:__**

      ${newMessage.content.replace(/`/g, "'")}

      

      \`\`\`

Kanal: ${newMessage.channel.name}  (${newMessage.channel.id})

Kullanıcı: ${newMessage.author.tag}  (${newMessage.author.id})

Mesaj ID: ${newMessage.id}

Atılma Tarihi: ${moment(oldMessage.createdAt).locale("tr").format('LLL')}\`\`\``)

        let user = newMessage.author

        let avatar = user.displayAvatarURL({dynamic: true, size: 1024})

        if(avatar.endsWith(".gif?size=1024")){

          messageEditedEmbed.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))

        } else {

          messageEditedEmbed.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

        }

      

      return client.channels.cache.get("kanalid").send({ 

        embeds: [messageEditedEmbed]

        })

      });

      

// sesli kanala giriş log

       client.on('voiceStateUpdate', async (oldState, newState) => {

        if (!oldState.channelId && newState.channelId) { 

          //  let users = newState.guild.members.cache.get(newState.id)

            let member = newState.guild.members.cache.get(newState.id)

            let microphone = member.voice.selfMute ? "kapalı" : "açık";

            let headphones = member.voice.selfDeaf ? "kapalı" : "açık";

            //console.log()

            let SesMicEmbed = new MessageEmbed()

          .setColor("RANDOM")

          .setAuthor(newState.member.user.username, newState.member.user.displayAvatarURL({ dynamic: true, size: 1024 }))

          .setThumbnail(newState.member.user.displayAvatarURL({ dynamic: true}))

          .setDescription(`

          <@${newState.member.user.id}> üyesi <#${newState.channel.id}> kanalına giriş yaptı.

          

**Kanala girdiği anda:**

\`•\` Mikrofon durumu: \`${microphone}\`. 

\`•\` Kulaklık durumu: \`${headphones}\`.

      

      \`\`\`

Giridiği kanal: ${newState.channel.name}

(${newState.channelId})

Kullanıcı: ${newState.member.user.tag}

(${newState.member.user.id})

Eylem Gerçekleşme: ${moment(newState.createdAt).locale("tr").format('LLL')}\`\`\`   

      Girdiği kanalda bulunan üyeler:

      ${newState.channel.members.map(x => `${x.user} - \`${x.user.id}\``).join("\n")}

          `)   

          return newState.guild.channels.cache.get("kanalid").send({ 

            embeds: [SesMicEmbed]

            })

        } 

      });

   

// sesli kanaldan çıkış log

        client.on('voiceStateUpdate', async (oldState, newState) => {

          if(oldState.channelId && !newState.channelId){

            let member = newState.guild.members.cache.get(newState.id);

          let microphone = member.voice.selfMute ? "kapalı" : "açık";

          let headphones = member.voice.selfDeaf ? "kapalı" : "açık";

          if(oldState.channel.members.map(x => x)[0]){

            var makro = oldState.channel.members.map(x => `${x.user} - \`${x.user.id}\``).join("\n")

          } else {

            var makro = "Maalesef bu kanalda üye bulunmamaktadır.";

          }

          let SesMicEmbed = new MessageEmbed()

          .setColor("RANDOM")

          .setAuthor(oldState.member.user.username, oldState.member.user.displayAvatarURL({ dynamic: true, size: 1024 }))

          .setThumbnail(oldState.member.user.displayAvatarURL({ dynamic: true}))

          .setDescription(`

<@${oldState.member.user.id}> üyesi <#${oldState.channel.id}> kanalından ayrıldı.

       

**Kanaldan Çıktığı anda:**

          \`•\` Mikrofon durumu: \`${microphone}\`. 

          \`•\` Kulaklık durumu: \`${headphones}\`.

          \`\`\`

Çıktığı kanal: ${oldState.channel.name}

(${oldState.channelId})

Kullanıcı: ${oldState.member.user.tag}

(${oldState.member.user.id})

Eylem Gerçekleşme: ${moment(oldState.createdAt).locale("tr").format('LLL')}\`\`\`

          Çıktığı kanalda bulunan üyeler:

          ${makro}

          `)   

          return oldState.guild.channels.cache.get("kanalid").send({ 

              embeds: [SesMicEmbed]

              })

          }

          });

          // sesli kanal değiştirme log

client.on('voiceStateUpdate', async (oldState, newState) => {

  //console.log("sa") 

  if (oldState.channelId && newState.channelId && oldState.channel && newState.channel) {

    if (oldState.channelId !== newState.channelId) {

    //console.log("sam")

    let member = newState.guild.members.cache.get(newState.id);

          let microphone = member.voice.selfMute ? "kapalı" : "açık";

          let headphones = member.voice.selfDeaf ? "kapalı" : "açık";

          if(oldState.channel.members.map(x => x)[0]){

            var makro = oldState.channel.members.map(x => `${x.user} - \`${x.user.id}\``).join("\n")

          } else {

            var makro = "Maalesef bu kanalda üye bulunmamaktadır.";

          }

          let SesMicEmbed1 = new MessageEmbed()

          .setColor("RANDOM")

          .setAuthor(oldState.member.user.username, oldState.member.user.displayAvatarURL({ dynamic: true, size: 1024 }))

          .setThumbnail(oldState.member.user.displayAvatarURL({ dynamic: true}))

          .setDescription(`

<@${oldState.member.user.id}> üyesi <#${oldState.channel.id}> kanalından <#${newState.channel.id}> kanalına geçiş yaptı.

**Kanal Değiştirdiği Anda:**

          \`•\` Mikrofon durumu: \`${microphone}\`. 

          \`•\` Kulaklık durumu: \`${headphones}\`.

          \`\`\`

Çıktığı kanal: ${oldState.channel.name}

(${oldState.channelId})

Kullanıcı: ${oldState.member.user.tag}

(${oldState.member.user.id})

Eylem Gerçekleşme: ${moment(oldState.createdAt).locale("tr").format('LLL')}\`\`\`

Eski Kanalında Bulunan Üyeler:

${makro}

Yeni Kanalında Bulunan Üyeler:        

${newState.channel.members.map(x => `${x.user} - \`${x.user.id}\``).join("\n")}

`)   

          return oldState.guild.channels.cache.get("kanalid").send({ 

              embeds: [SesMicEmbed1]

              })

  }}

}); 

///antispammer
 

   const antiSpam = new AntiSpam({ 

     warnThreshold: 2, // Amount of messages sent in a row that will cause a warning. 

     muteThreshold: 4, // Amount of messages sent in a row that will cause a mute 

     kickThreshold: 60000, // Amount of messages sent in a row that will cause a kick. 

     banThreshold: 800000, // Amount of messages sent in a row that will cause a ban. 

     maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam. 

     warnMessage: "**{@user},Lütfen Spam Yapmayı Kes Yoksa Susturulacaksın .**", // Message that will be sent in chat upon warning a user. 

     kickMessage: "**{@user} Spam Yaptığı İçin Sunucudan Atıldı.** ", // Message that will be sent in chat upon kicking a user. 

     muteMessage: "**{@user} Spam Atığın İçin \`10 dakika\` Susturuldu.**", // Message that will be sent in chat upon muting a user. 

     banMessage: "**{user_tag} Spam Atığı İçin Ban Yedi.**", // Message that will be sent in chat upon banning a user. 

     maxDuplicatesWarning: 6, // Amount of duplicate messages that trigger a warning. 

     maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning. 

     maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning. 

     maxDuplicatesMute: 8, // Ammount of duplicate message that trigger a mute. 

     ignoredPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions. 

     ignoreBots: true, // Ignore bot messages. 

     verbose: true, // Extended Logs from module. 

     ignoredMembers: [], // Array of User IDs that get ignored. 

     unMuteTime:  10, // Amount of time (in minutes) a user will be muted for. 

     removeMessages: true, // If the bot should remove all the spam messages when taking action on a user! 

     modLogsEnabled: true, // If to enable modlogs 

     modLogsChannelName: "・koruma-log", // channel to send the modlogs too! 

     modLogsMode: "embed", 

     // And many more options... See the documentation. 

   }); 

    

   client.on("ready", () => console.log(`Logged in as ${client.user.tag}.`)); 

    

   client.on("messageCreate", (message) => antiSpam.message(message))

//antispammer son
  
client.login(process.env.token).then(c => console.log(`Başarılı şekilde bağlandım ${client.user.tag}!`)).catch(err => console.error(`Bot giriş yapamadı!`));  
 
