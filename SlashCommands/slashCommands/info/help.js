const Database = require("@replit/database")
const db = new Database()
const Discord = require("discord.js") 


module.exports = {
    name: "help",
    description: "help",
    timeout: 5000,
    
     
    run: async(interaction, client) => {
      const { options, member } = interaction;
      
      




  

      const channel = interaction.channel
      if(!channel) return await interaction.reply({content: "Je mi líto, ale vyskytla se chyba..", ephemeral: true}).catch(err => console.log(err))


      try {
        var msg = await interaction.reply({
          embeds: [
       new Discord.MessageEmbed()
         
             
			.setColor('GREEN')
			.setTitle('Help')
			.setDescription(`idk`) 
			        
          ], 
        ephemeral: true 
        });
        

         



      } catch (e) {
        console.log(e)
        return  await interaction.reply({content: "Je mi líto, ale vyskytla se chyba.", ephemeral: true}).catch(err => console.log(err)) 
      }
    }
}
