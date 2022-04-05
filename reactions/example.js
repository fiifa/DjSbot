const Discord = require("discord.js");

module.exports = {  
    id: "CHANNEL",
    run: async (message) => {
        await message.react("Reaction1");
        await message.react("Reaction2");
        await message.react("😄") 
      
        
    }
}  
