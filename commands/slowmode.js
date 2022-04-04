module.exports.run = (client, message, args) => {


const Discord = require('discord.js')
let chyba = "Něco se pokazilo!"
  

 //message.reply(chyba)
if(!message.member.permissions.has('MANAGE_MESSAGES'))
return message.reply("No perms.").catch(err => console.log(err))
if(args [0] == "off") args[0] = 0
if (args.length < 1) {
message.reply('??? for example: `,slowmode 1`').catch(err => console.log(err))
return
}

let cas = args[0];




if (isNaN(cas)) {
message.reply(
'Nedokážu rozluštit, co tím myslíš... \n \nNaučím tě to! Stačí napsat jen `,slowmode 1`'
).catch(err => console.log(err))
return
}





message.channel.setRateLimitPerUser(cas, `${message.author.tag} nastavil slowmode na ${cas} sekund`).catch(err => console.log(err))
message.reply(`Pomalý režim nastaven na ${cas} sekund.`).catch(err => console.log(err))

};


  
