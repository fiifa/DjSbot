const express=require("express"),app=express();app.get("/",function(e,p){p.send("bot is online")}),app.listen(3e3);





const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });

client.on('ready', () => {
  
 
  
  client.user.setActivity('fifaaaa', { type: 'STREAMING' })
}) 

   
     
  console.log('ONLINE');


  
  const modra = '#000AFF'
 

const fs = require("fs");
const prefix = ",";
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
  client.commands.set(commandName, command)
}

 
const reactions = {}
for (let x of fs.readdirSync(__dirname + "/reactions")) {
    let d;
    try {
        d = require(`./reactions/${x}`);
    } catch (e) {
        console.log(e);
        continue;
    }

    reactions[d.id] = d.run;
} 



  client.on('messageCreate', message => {
    
let reaction = reactions[message.channel.id];
if (reaction) reaction(message); 


        
     
		
    
    
    if (message.content.startsWith(prefix)) {
 const args = message.content.slice(prefix.length).trim().split(/ +/g)
      if (message.content.startsWith("!embed")) {
 message.channel.send(exampleEmbed)
       } 
const commandName = args.shift()
const command = client.commands.find((x, y) => y.toLowerCase() === commandName.toLowerCase() || (x.aliases && x.aliases.find(z => z.toLowerCase() === commandName.toLowerCase()))); 
    if(!command) return //message.reply({content: "Tento příkaz neexistuje."})
    command.run(client, message, args)
  }    

            });
             
    








  


client.login(process.env.token);
