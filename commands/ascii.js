
module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
const ascii = require('ascii-art');
const figlet = require('figlet');

  
    const exampleEmbed = new Discord.MessageEmbed()
        
    if(!args[0]) return message.channel.send('Musíš napsat text!');
    
    msg = args.join(" ");

    figlet.text(msg, function (err, data){
        if(data.length > 2000) return message.channel.send('Mužeš dát maximálně 2000 písmen!')
    
        exampleEmbed.setDescription(`\`\`\`${data}\`\`\``);
exampleEmbed.setTitle('Jolanda ti vyrobila ascii-text!')
exampleEmbed.setColor("FFFF00")
exampleEmbed.setFooter("Líbí se ti?") 
exampleEmbed.setThumbnail(process.env.logo)
      
  message.reply({ embeds: [exampleEmbed] }).catch(err => console.log(err))
    })
          
  
}
module.exports.aliases = ["asciitext"]; 
