module.exports.run = async(client, message, args) => {
  
const Discord = require('discord.js')
  
  
  if(!message.member.permissions.has("BAN_MEMBERS"))
return message.channel.send(`Nemáš dostatečná oprávnění k provedení tohoto příkazu.`)

const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(`Zmiň člověka, kterého chceš zabanovat.`)

var reason = args[1]
if(!reason) reason = 'Nebyl uveden žádný důvod banu.'

if(member.user.id === message.author.id) return message.channel.send(`Proč bys chtěl dát ban sám sobě? 😦`)

if(member.user.id === '841303290359578665') return message.channel.send(`Promiň, ale jeho zabanovat nedokážu. #Panda 😦`)

if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Proč se pokoušíš zabanovat větší roli, než jsi ty? To, že jsi pod ním má jistý důvod když se ho snažíš zabanovat.`)

var msg = await message.channel.send(`**Úspěšně jsem zabanoval:** ${member.user.tag} **z důvodu:** `+args.slice(1).join(" "))

message.guild.members.ban(member, {reason: message.author.tag+" - "+args.slice(1).join(" ")}).catch(err => {
return msg.edit(`Nemám dostatečná oprávnění na provedení tohoto příkazu.`).catch(err => console.log(err))
})
  } 





