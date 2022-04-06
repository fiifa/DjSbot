const Discord = require("discord.js");

module.exports = {  
    id: "id",
    run: async (message) => {
        await message.react("❤");
        await message.react("💬");
        await message.react("🔗")
      
        const embed = new Discord.MessageEmbed()
            
            .setColor('A5ADB9')
            .setTitle('✅ Reaction added')
            .setDescription(`React: ❤ \nReact: 💬 \nReact: 🔗 \nUser: **${message.author.tag}** \n Channel <#${message.channel.id}>`) 
            

        message.client.channels.cache.get("CHANNEL ID").send({embeds: [embed]})
    }
}  

