exports.run = async (client, message, args) => {

    message.channel.createOverwrite(message.guild.roles.cache.get(message.guild.id),{
        SEND_MESSAGES: true
    })
      message.channel.send("Channel unlocked.")

    }
      
      exports.help = {
        name: "unlock",
        description: "unlocks a channel",
        category: "Moderation"
      }
      
      exports.requirements = {
        userPerms: ["MANAGE_CHANNELS"], 
        clientPerms: ["MANAGE_CHANNELS"],
        ownerOnly: false
      }