const fetch = require('node-fetch') 
const { REST } = require('@discordjs/rest');
const Database = require("@replit/database")
const db = new Database()
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require("fs");
const path = require('path');
require('colors');



const express = require('express')();
express.get('/', (req, res) => res.send('© fifa_'))
express.listen(300);




const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });



const fs = require("fs");
const x = "Online!";

const x4 = require('./config.json');
const x5 = process.env.token;
const x2 = new Discord.Collection();
const x3 = fs.readdirSync("./slashCommands");



const config = x4
const token = x5

client.slash = x2
client.commands = x2
client.aliases = x2
client.categories = x3








readdirSync("./slashCommands/").map(async dir => {
    const cmnds = readdirSync(`./slashCommands/${dir}/`).map(async cmd => {
    let pull = require(`./slashCommands/${dir}/${cmd}`)
        client.slash.set(pull.name, pull)
        if (pull.aliases) {
            pull.aliases.map(p => client.aliases.set(p, pull))
        }
    });
});



  
const commands = []
readdirSync("./slashCommands/").map(async dir => {
readdirSync(`./slashCommands/${dir}/`).map(async (cmd) => {
commands.push(require(path.join(__dirname, `./slashCommands/${dir}/${cmd}`)))
    });
});
const rest = new REST({ version: "9" }).setToken(token);
(async () => {
	try {
		console.log('🔔 | Načítám slash commandy...'.yellow);
		await rest.put(
Routes.applicationCommands(config.clientID), 
			{ body: commands },
		);
		console.log('✅ | Slash commandy byly načteny.'.green);
	} catch (error) {
		console.error(error);
	}
})();





  
client.on("interactionCreate", async (interaction) => {
				
    if (interaction.isCommand() || interaction.isContextMenu()) {
		if (!client.slash.has(interaction.commandName)) return;
      
		if (!interaction.guild) return;
		const command = client.slash.get(interaction.commandName)
			command.run(interaction, client);
	}
});

client.on("messageCreate", async(message) => {
  let e = await db.get(`msgs_${message.author.id}`) 
    if(e == null) e = 0
     await db.set(`msgs_${message.author.id}`, e + 1)
        });

  client.on("guildMemberAdd", member => {

message.guild.channels.cache.get("TVUJ-KANAL").send({content: `${member} se připojil! Ahoj! 👋`})

});

    client.on("guildMemberRemove", member => {

message.guild.channels.cache.get("TVUJ-KANAL").send({content: `${member} se odpojil! Ahoj! 👋`})

});              

  const load = dirs => {
    
    const events = fs.readdirSync(`./events/${dirs}/`).filter(d => d.endsWith("js") );
    for (let file of events) {
      let evt = require(`./events/${dirs}/${file}`);
      let eName = file.split('.')[0];
      client.on(eName, evt.bind(null,client));
    }
  };
[''].forEach((x) => load(x));



client.login(process.env.token);
