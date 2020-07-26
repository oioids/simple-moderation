exports.run = async (client, message, args) => {

    message.channel.createOverwrite(message.guild.roles.cache.get(message.guild.id),{
        SEND_MESSAGES: false
    })
      message.channel.send("Channel locked.")

    }
      
      exports.help = {
        name: "lock",
        description: "locks a channel",
        category: "Moderation"
      }
      
      exports.requirements = {
        userPerms: ["MANAGE_CHANNELS"], 
        clientPerms: ["MANAGE_CHANNELS"],
        ownerOnly: false
      }