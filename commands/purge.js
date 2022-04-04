module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
  
  



  
let arg = message.content.split(" ")
if(!message.member.permissions.has("MANAGE_MESSAGES"))
return message.reply(`${message.author.username}, Nemáš dostatečná oprávnění k provedení tohoto příkazu.`) 
  
let clear = arg[1];
if(!clear) return message.reply(`Kolik zpráv chceš smazat?`).catch(err => console.log(err))
if(isNaN(clear)) return message.reply("To je číslo?").catch(err => console.log(err))
if(clear > 100) return message.reply("Nemohu smazat více než 100 zpráv.").catch(err => console.log(err))
if(clear < 1) return message.reply("No.").catch(err => console.log(err))

message.channel.bulkDelete(clear)
message.channel.send(`Deleted **${clear}** messages. If not, check my permissions.`)
.then(message => 
 message.delete({timeout: 5000})
 ).catch(err => console.log(err))
}



