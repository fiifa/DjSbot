const Database = require("@replit/database")
const db = new Database()
const Discord = require("discord.js") 


module.exports = {
    name: "zpravy",
    description: "Zprávy",
    timeout: 5000,
    options: [
      {
          name: "uživatel",
          description: "...",
          required: false,
          type: 6
      }



    ],
    
    run: async(interaction, client) => {
      const { options, member } = interaction;
      const zpravy = options.getString("zpravy");
      
      
//const user = interaction.options.getUser("user") || interaction.user
      const user = interaction.options.getUser("uživatel") || interaction.user
      if(user == null) user = interaction.user;
   
const embed0 = new Discord.MessageEmbed()

      .setTitle("Zprávy")
      .setColor("RED")
      .setDescription(`**${user.tag}** má celkem **0** zpráv, protože žádnou zprávu nenapsal.`)


  let msgs = await db.get(`msgs_${user.id}`)
  if(msgs == null) return interaction.reply({embeds: [embed0], ephemeral: true}).catch(err => console.log(err))
      //const avatar = user.displayAvatarURL({ size: 2048, format: "png" });


      const channel = interaction.channel
      if(!channel) return await interaction.reply({content: "Je mi líto, ale vyskytla se chyba..", ephemeral: true}).catch(err => console.log(err))


      try {
        var msg = await interaction.reply({
          embeds: [
       new Discord.MessageEmbed()
         
             
			.setColor('GREEN')
			.setTitle('Zprávy')
			.setDescription(`**${user.tag}** má celkem **${msgs}** zpráv/y.`) 
			        
          ], 
        ephemeral: true 
        });
        

         



      } catch (e) {
        console.log(e)
        return  await interaction.reply({content: "Je mi líto, ale vyskytla se chyba.", ephemeral: true}).catch(err => console.log(err)) 
      }
    }
          }
