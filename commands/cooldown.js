module.exports.run = async(client, message, args) => {
  
const Discord = require('discord.js')
  const ms = require("pretty-ms")
 const db = require("quick.db")
  const check = await db.get(`check_${message.author.id}`);
  const timeout = 30000; 
  if (check !== null && timeout - (Date.now() - check) > 0) {
    
    const timeLeft = ms(timeout - (Date.now() - check))
    const cooldown = new Discord.MessageEmbed()
                     
      
			.setColor('#FFF000')
			.setTitle('Cooldown!')
			.setDescription(`Wait __${timeLeft}__ sec!`) 
			




  message.reply({embeds: [cooldown]})
} else {
  
   message.reply("😃") 
//or... Normal code => your code
      

}
  await db.set(`check_${message.author.id}`, Date.now())
}
module.exports.aliases = ["alias"]; 
