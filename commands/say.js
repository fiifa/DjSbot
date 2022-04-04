module.exports.run = (client, message, args) => {
  
const Discord = require('discord.js')
  
  


  if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.permissions.has('MANAGE_MESSAGES'))
				return message.reply('No perms.').catch(err => console.log(err))

		if (!args[0])
			return message.reply(
				` ? Wait!! With this command you Can ping **everyone**, **here**, or other roles!`
			).catch(err => console.log(err))
		//message.delete({ timeout: 1000 });
		
       // if (!args[1])
      //    return
            message.channel.send(args.join(' ')).catch(err => console.log(err))
		
message.delete().catch(err => console.log(err))//({ timeout: 1000 });
			


}
