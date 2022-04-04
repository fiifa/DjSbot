module.exports.run = (client, message, args) => {
  

 const member = message.mentions.members.first()
 if (!member) return message.reply('Prosím, označ toho, koho chceš kicknout.')
 if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply(`Nemáš dostatečná oprávnění, Sire ${message.author.name}.`)
 if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send('Dobrý pokus...')

 try {
 member.kick().then(() => {
 message.reply(`i kicked ${member}. `)
 })
 } catch (err) {
 console.log(err)
 message.reply('Sorry, but no...')
 }
} 

