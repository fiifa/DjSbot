module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
  

  


const nejsimajitelxd = new Discord.MessageEmbed()
.setDescription("Vypadá to, že nejsi můj vývojář...")
.setColor("RED")
const owners_id = ["YOUR-ID"];
 if (!owners_id.includes(message.author.id))
 return message.reply({embeds: [nejsimajitelxd]}); const args2 = message.content.split(" ").slice(1);

 const clean = text => {
 if (typeof(text) === "string")
 return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
 else
 return text;
}
 
 try {
 const code = args2.join(" ");
var guild = message.guild;
var channel = message.channel;
var author = message.author;
var reply = message.reply;
var guildid = message.guild.id;
var guildname = message.guild.name;
var react = message.react;
var user = client.user;
var member = message.member;
var msg = message;
 let evaled = eval(code);
const xd = message.content.slice("".length).trim().split(/ +/);
xd.shift().toLowerCase().split(" ")[0]

 const { inspect } = require("util");
const output = clean(evaled)

 const eval2 = new Discord.MessageEmbed() 

   .setColor("#FF0000")
 .addField("Vstup", `\`\`\`js\n${xd.join(" ")}\`\`\``)
 .addField("Výstup", `\`\`\`js\n${output}\`\`\``)
   
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
   
 
 message.reply({embeds: [eval2]})
  
 } catch (err) {
message.reply(`\`CHYBA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
};
  
                      
