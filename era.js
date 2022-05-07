global.client = client;

client.config = {

  token : "", //Bot Token
  prefix : ".", //Bot Prefix
  guildid : "812322655436144660", //Sunucu ID
  sahip : "789075919192981524", //Sahip ID
  footer : "❤️Era", //Bot Bio
  status : "dnd", //online //çevrim içi || idle // boşta || dnd //rahatsız etmeeyin || invisible /görünmez
  botses : "812414158766604288", //Botun gireceği ses kanal id si  

  owner : "788363178747756565", //Sunucu Genel Kurucusu
  cezapuan : "812417724772253716", //Ceza Puan Log Kanalı
  booster : "812322655587794957", //Booster Rol


  taglar : {
    tag : "☥", //Tag 1
    TagVarYok : false, //False ise sadece tagı alır kayıtlarda eğer true ise 2. tagı aktif eder tag rolü olmayana tag2 verir
    tag2 : "☥", //Tag 2
    tagrol : "812322655570886698", //Tag Rolü
  },

  SadeceTaglı : false, //False ise herkes kullana bilir //True ise sadece taglı ve booster kullana bilir

  chatmute : {
    yetkili : "812412411315355688", //Chat Mute Yetkili
    log : "812415157056700527", //Chat Mute
    rol : "812322655600509031", //Chat Mute Rolü
  },
  
  voicemute : { 
    yetkili : "", //Voice Mute Yetkili
    log : "812415242575282186", //Voice Mute
    rol : "812322655600509032", //Voice Mute Rolü
  },

  meeting : {
    log : "812322657897938947", //Meeting Ses Kanalı
  },

  jail : {
    yetkili : "812412419007447050", //Jail Yetkili
    rol : "812322655600509034", //Jailli Rol
    log : "812415389060694066", //Jail Log
  },

  ban : {
    forceban : "812322655637602331", //Force Ban Yetkili
    banyetkili : "812412422736445440", //Normal Ban Yetkilisi
    log : "812415526671220767", //Logu
    banlimit : 3, //Ban Limitin Kaç olacağını yazınız Örnek (3 : yetkili 3 kere ban attıktan sonra yetkisini çeker)
  },

  allmute : {
    yetkili : "812416564167049276", //All Mute Yetkili
  },

  karaliste : {
    yetkili : "812412439261216788", //Kara Liste Yetkili 
    log : "812416662984196126", //Kara liste Log
  },
  cezabilgi : {
    yetkili : "812412439261216788", //Ceza Bilgi Yetkili
  },
  
  yetkilisay : {
    yetkili : "812412453236375643", //Komutu Kullanacak Yetkili
    altyetkili : "812419258893860954", //En Alt Yetkili
  },

  kilit : {
    yetkili : "812419262836244520", //Kanal Kilit Yetkili
  },

  guildMemberAdd : {
    guvenli : "812416910955774002", //7 Gün Önce Açılmış Hesap Log
    forceban : "812415875159949373", //Kalıcı Ban log (Kalıcı ban yemiş üyenin banı açılmıştır ve sunucuya tekrar girese ban atar bunu logu)
    jail : "812415389060694066", //Jailli üye çık gir yaparsa
  },

  trasport: {
    yetkili : "812412446202789959", //Çek Yetkili
  },

  register : {
    erkek : ["812322655562760221","812322655529074716",""], //Erkek Rollerini Sırayla Giriniz
    kız : ["812322655562760222","812322655529074717",""], //Kız Rollerini Tek Tek Giriniz
    kayıtsız : ["812322655529074708","812419268469456927"], //Kayıtsız Rol ID
    yetkili : "812419258893860954", //Register Yetkili
  },

  emoji : {

    sıfır : "<a:0uc:805477505971912724>", //0 Emoji Örnek : <a:sıfır:1234567891011>
    bir : "<a:1uc:805477504935919647>", //1 Emoji Örnek : <a:bir:1234567891011>
    iki : "<a:2uc:805477505741357157>", //2 Emoji Örnek : <a:iki:1234567891011>
    üç : "<a:736894986775429211:805477505640824904>", //3 Emoji Örnek : <a:üç:1234567891011> 
    dört : "<a:4uc:805477504013566013>", //4 Emoji Örnek : <a:dört:1234567891011>
    beş : "<a:736894986469244931:805477502180655114>" , //5 Emoji Örnek : <a:beş:1234567891011>
    altı : "<a:6uc:805477661333389323>", //6 Emoji Örnek : <a:altı:1234567891011>
    yedi : "<a:7uc:805477505682898985>", //7 Emoji Örnek : <a:yedi:1234567891011>
    sekiz : "<a:736894989514178600:805477505795752017>", //8 Emoji Örnek : <a:sekiz:1234567891011>
    dokuz : "<a:9uc:805477506021851206>", //9 Emoji Örnek : <a:dokuz:1234567891011>

    onay : "812423721067348029", //Onay Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
    red : "812423754578788413", //Red Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
  },
 

     bot : { 

         token : "BOT TOKENİNİZİ MAİN KISMINA GİRİNİZ 49. SATIRDA", 

         owner : "KESİNLİKLE KENDİ İDNİ GİR YOKSA ÇALIŞMAZ", 

         prefix : ".", 

         BotStatus : "YOUTUBE BORANGKDN", 

         BotFooter : "YOUTUBE BORANGKDN", 

         cooldown : 8 

     }, 

     penals : { 

         ban : { 

             staff : "BAN YETKİLİSİ ID", 

             log : "BAN LOG ID", 

             limit : 3 

         }, 

         jail : { 

             staff : "JAİL YETKİLİSİ ID", 

             roles : "CEZALI ROLÜ ID", 

             log : "CEZA LOG ID", 

             limit : 5 

         }, 

         mute : { 

             staff : "MUTE YETKİLİSİ ID", 

             roles : "SUSTURURULMUS ROLÜ ID", 

             log : "MUTE LOG ID", 

             limit : 5 

         }, 

         warn: { 

             staff: "WARN YETKİLİSİ ID", 

             log: "WARN LOG ID" 

         }, 

         transport : { 

             staff: "TAŞIYICI YETKİLİSİ ID" 

         }, 

         points: { 

             mutepoints: "10", 

             banpoints: "30", 

             jailpoints: "20", 

             warnpoints: "5" 

         } 

     }, 

     logs: { 

         taglog: "TAG LOG ID", 

         rollog: "ROL LOG ID", 

         messagelog: "MESAJ LOG ID", 

         seslog: "SES LOG ID" 

     }, 

     roles: { 

         vip: "VİP ROL ID", 

         sponsor: "SPONSOR ROL ID", 

         müzisyen: "MÜZİSYEN ROL ID", 

         team: "TAGLI ROL ID" 

     }, 

     channels: { 

         chat: "CHAT KANALI ID", 

         voicechannel: "BOT SES KANALI ID", 

         welcomechannel: "HOŞ GELDİN KANALI ID", 

         rules: "KURALLAR KANALI ID" 

     }, 

     registration: { 

         unregistered: "KAYITSIZ ROL ID", 

         man: ["ERKEK ROL ID", "2. ERKEK ROL ID"], 

         woman: ["KADIN ROL ID", "2. ERKEK ROL ID"], 

         yetkilialim: "YETKİLİ ALIM ROL ID", 

         staff: "REGİSTER ROL ID", 

         enaltyetkilirolü: "EN ALT YETKİLİ ROL ID", 

         GuilDTag: "SUNUCU TAGINIZ", 

         TagSymbol: "ISIM YAŞIN ÖNÜNE KOYULACAK SEMBOL", 

         autonickname: "$ İsim | Yaş", 

         symbol: "|", 

         suspecios: "ŞÜPHELİ ROL ID", 

         susoeciosnickname: "Şüpheli Hesap", 

         oneman: "1. ERKEK ROLU", 

         onewoman: "2. ERKEK ROLU", 

         minage: 13,  

         purchase: false 

     }, 

     Guild: { 

         GuildID: "SUNUCU ID", 

         GuilDName: "BoranGkdn Video", 

         GuildOwnerRole: ["SUNUCU OWNER ROL ID"] 

     }, 

     emojis: { 

         tada: "TADA EMOJİSİ", 

         yes: "ONAY EMOJİSİ", 

         no: "RED EMOJİSİ" 

  

     }
}
