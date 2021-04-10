const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
 
    let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter(client.config.footer).setColor("RANDOM");
 
    if(message.author.id !== client.config.sahip) 
    if(!message.member.roles.cache.has(client.config.register.yetkili))
    return message.react(client.config.emoji.red)

      message.channel.send(embed.setDescription(`
      **GENEL KOMUTLAR**
      \`${client.config.prefix}afk [isterseniz sebep]\`
      \`${client.config.prefix}avatar [üye]\`
      \`${client.config.prefix}booster [isim]\`
      \`${client.config.prefix}git [etiket]\`
      \`${client.config.prefix}gbt [üye]\`
      \`${client.config.prefix}say\`
      \`${client.config.prefix}ses\`
      \`${client.config.prefix}snipe\`
      **YETKİLİ KOMUTLAR**
      \`${client.config.prefix}all-mute\`
      \`${client.config.prefix}all-unmute\`
      \`${client.config.prefix}ban [üye] [isterseniz sebep]\`
      \`${client.config.prefix}ban-limit-sıfırla [üye] [isterseniz sebep]\`
      \`${client.config.prefix}unban [üye] [isterseniz sebep]\`
      \`${client.config.prefix}cezabilgi [ceza id]\`
      \`${client.config.prefix}mute [üye] [süre] [isterseniz sebep]\`
      \`${client.config.prefix}unmute [üye] [isterseniz sebep]\`
      \`${client.config.prefix}çek [üye]\`
      \`${client.config.prefix}forceban [üye] [isterseniz sebep]\`
      \`${client.config.prefix}forceunban [üye] [isterseniz sebep]\`
      \`${client.config.prefix}isim-temizle [üye]\`
      \`${client.config.prefix}jail [üye] [isterseniz sebep]\`
      \`${client.config.prefix}tempjail [üye] [süre] [isterseniz sebep]\`
      \`${client.config.prefix}unjail [üye] [isterseniz sebep]\`
      \`${client.config.prefix}karaliste [üye] [isterseniz sebep]\`
      \`${client.config.prefix}karaliste-kaldır [üye] [isterseniz sebep]\`
      \`${client.config.prefix}karaliste-bilgi\`
      \`${client.config.prefix}kilit\`
      \`${client.config.prefix}sil [1 - 100]\`
      \`${client.config.prefix}vmute [üye] [süre] [isterseniz sebep]\`
      \`${client.config.prefix}vunmute [üye] [isterseniz sebep]\`
      \`${client.config.prefix}yetkilisay\`



      `))

};
exports.conf = {
  command: "modyardım", // Asıl komutumuz
  description: "Botun yardım menüsünü atar", // Komut açıklamamız
  aliases: ["modyardım"] // Komutumuzun yardımcıları
}
