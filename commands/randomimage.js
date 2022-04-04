module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
  function randomhehe() {
    var rand = ["IMAGE LINK 1", "IMAGE LINK 2"

               
];

    return rand[Math.floor(Math.random()*rand.length)];
}

message.reply({ embeds: [
  new MessageEmbed()



    .setImage(randomhehe())
] }); 

                
}
