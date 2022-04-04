module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
  
  
  
const ping = new Discord.MessageEmbed()
                     
      .setThumbnail(process.env.logo)
			.setColor('#FFFF00')
			.setTitle('Pong!') 
			.setDescription(`My ping id **${Date.now() - message.createdTimestamp}ms**!`) 
			




  message.reply({embeds: [ping]}).catch(err => console.log(err))
  
  
    }
