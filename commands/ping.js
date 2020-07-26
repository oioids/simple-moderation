const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
   message.channel.send(new MessageEmbed().setDescription(`Pong! \`${client.ws.ping}ms\``))
  }
  
  exports.help = {
    name: "ping",
    aliases: ["latency"],
    description: "simple ping command",
    category: "Information"
  }
  
  exports.requirements = {
    userPerms: ["SEND_MESSAGES"], 
    clientPerms: ["SEND_MESSAGES"],
    ownerOnly: false
  }