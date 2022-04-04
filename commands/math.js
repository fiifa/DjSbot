module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
  
  const math = require('mathjs');


  

 if(!args[0]) return message.reply('1-1 = 3?');
 let resp;
 try {
 resp = math.evaluate(args.join(" "))
 } catch (e) {
 return message.reply('no args!')
 }
 const embed = new Discord.MessageEmbed()
 .setColor("FFF000")
 .setTitle('Math')
 .addField('Math:', `\`\`\`css\n${args.join(' ')}\`\`\``)
 .addField('my reply:', `\`\`\`css\n${resp}\`\`\``)

 message.reply({embeds: [embed]}).catch(err => console.log(err))
 } 
module.exports.aliases = ["pocitej","vypocitej","kl"]; 
