module.exports.run = async(client, message, args) => {
  
const Discord = require('discord.js')
  const ms = require("pretty-ms")
 const db = require("quick.db")
  const check = await db.get(`check_${message.author.id}`);
  const timeout = 30000; 
  if (check !== null && timeout - (Date.now() - check) > 0) {
    
    const timeLeft = ms(timeout - (Date.now() - check))
    const exampleEmbed = new Discord.MessageEmbed()
                     
      
			.setColor('#FFF000')
			.setTitle('Cooldown!')
			.setDescription(`wait __${timeLeft}__ sec!`) 
			.setFooter(`© fifa_#2575`);




  message.reply({embeds: [exampleEmbed]})
} else {
  
    
      if(!args[0]) return message.reply('Jaký máš nápad? Myslím si, že je zajímavý!');

  message.delete().catch(err => console.log(err))
  
  
      
      const embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTitle('')
        .setColor('#002EFF')
        .addField('User:', message.author.tag.toString())
        .addField('Suggest:', args.join(' ').toString())
        .setFooter('iD: ' + message.author.id.toString() + '')
        .setTimestamp()

//(args.join(" "))
      message.client.channels.cache.get('CHANNEL-ID').send({embeds: [embed]}).then(m => { m.react('✅'); m.react('❌') }) .catch(err => console.log(err))


}
  await db.set(`check_${message.author.id}`, Date.now())
}
exports.name = "napad" 
module.exports.aliases = ["suggest"]; 
