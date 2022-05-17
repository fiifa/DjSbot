const fetch = require('node-fetch') 
const { REST } = require('@discordjs/rest');
const Database = require("@replit/database")
const db = new Database()
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require("fs");
const path = require('path');
require('colors');



const express = require('express')();
express.get('/', (req, res) => res.send('<!-- auto-pinging 841303290359578665 --> xd'))
express.listen(300);




const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });



const error = "⚠"; 
const modra = '#000AFF';
const cervena = '#FF0000';
const zluta = '#FFFF00';
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





/*client.on("ready", async() => {
   console.log(x) 
client.user.setActivity('ONO TO FUNGUJE? :OOO', { type: 'STREAMING' })
  
}); */

//console.log(commands)
/*client.on("ready", () => {
      function status() {
         const _status_ = [` :D`, ` 😎`, `Yeeee`]
         const Power = Math.floor(Math.random() * _status_.length);
          client.user.setActivity(_status_[Power], {type: "STREAMING"});
        }; setInterval(status, 15000)
}); 
*/


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





//client.on("ready", async() => {
  //  console.log(`Přihlášen na bota: ${client.user.tag}!`.magenta);
//});




  
client.on("interactionCreate", async (interaction) => {

if (interaction.isAutocomplete()) {
		const userInput = interaction.options.getFocused().toString();
		const getFullInput = interaction.options.getFocused(true);

		switch (interaction.commandName) {
			case 'npm':
				const text = getFullInput.name === 'package' ? getFullInput.value : interaction.options.getString('package');
				let url = await fetch(`https://api.npms.io/v2/search?q=${text}`).then(response => response.json());

				if (!text) {
					return interaction.respond([{
						name: 'Napiš název balíčeku, který chceš otevřít.',
						value: userInput
					}])
				} else {
					const filtered = url.results.filter(x =>
						x.package.name?.toLowerCase().includes(text.toLowerCase())
					)

					await interaction.respond(
						filtered.map(choice => ({
							name: choice.package.name,
							value: choice.package.name
						})).slice(0, 25)
					).catch(err => {
						console.log(err.message)
					})

				}
    }
}
    if (interaction.isCommand() || interaction.isContextMenu()) {
		if (!client.slash.has(interaction.commandName)) return;
      
		if (!interaction.guild) return;
		const command = client.slash.get(interaction.commandName)
			command.run(interaction, client);
	}
});



/*client.on("ready", (message) => {
   const start = new Discord.MessageEmbed()
			.setColor()
			.setDescription("Bot byl úspěšně zapnutý. Pravděpodobně ho zapl fifa.") 
  try {
    client.channels.cache.get('964085546802610186').send({embeds: [start]})
  } catch (e) {
    console.log(e)
}
}); */





 

 const reactions = {}
for (let x of fs.readdirSync(__dirname + "/messageReactions")) {
    let d;
    try {
        d = require(`./messageReactions/${x}`);
    } catch (e) {
        console.log(e);
        continue;
    }

    reactions[d.id] = d.run;
} 
client.on("messageCreate", async(message) => {

let reaction = reactions[message.channel.id];
if (reaction) reaction(message); 
  
if (!message.guild) return;
  if (message.author.bot) return;

  if(message.content === 'cmds') {

message.author.send(commands)
}


});

/*client.on("messageCreate", async(message) => {


  
let reaction = reactions[message.channel.id];
if (reaction) reaction(message); 



  
   
  if (!message.guild) return;
  if (message.author.bot) return;

  if(message.content.toLowerCase() === "test") {
message.reply("🌛")

  }
});
*/



let folders = fs.readdirSync("./prefixCommands/");
    
folders.forEach((dir) => {
    const commandFiles = fs.readdirSync(`./prefixCommands/${dir}/`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./prefixCommands/${dir}/${file}`);
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            continue;
        }
        client.commands.set(command.name, command);
    }
});

client.on("messageCreate", async(message) => {
      const prefix = ","
  
let e = await db.get(`msgs_${message.author.id}`) 
    if(e == null) e = 0
        
     await db.set(`msgs_${message.author.id}`, e + 1)

  
if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === 'dm') return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
//console.log(args)
const cmda = args.shift().toLowerCase();
let command = client.commands.get(cmda) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmda));
if (!command) return;

try {
    command.run(client, message, args)
} catch (error) {
    console.log(error)
    message.reply({ content: `Nastal error!` });
} 


  
});

  const load = dirs => {
    
    const events = fs.readdirSync(`./messageEvents/${dirs}/`).filter(d => d.endsWith("js") );
    for (let file of events) {
      let evt = require(`./messageEvents/${dirs}/${file}`);
      let eName = file.split('.')[0];
      client.on(eName, evt.bind(null,client));
    }
  };
[''].forEach((x) => load(x));



client.login(process.env.token);
