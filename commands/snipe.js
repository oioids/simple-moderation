const Discord = require("discord.js")
exports.run = async (client, message, args) => {
const msg = client.snipes.get(message.channel.id);
if(!msg) return message.channel.send("Couldn't find anything")

const embed = new Discord.MessageEmbed()
  .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
  .setDescription(msg.content)
  .setTimestamp()
if (msg.image) embed.setImage(msg.image);
message.channel.send(embed)
}

exports.help = {
  name: "snipe",
  category: "Miscellaneous",
  description: "shows a recently deleted message"
}

exports.requirements = {
  userPerms: ["SEND_MESSAGES"], 
  clientPerms: ["SEND_MESSAGES"],
  ownerOnly: false
}