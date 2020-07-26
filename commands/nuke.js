exports.run = async (client, message, args) => {

    message.channel.clone().then((ch) => {ch.setParent(message.channel.parent.id)
    ch.setPosition(message.channel.position)})
    message.channel.delete();
    
    }
      
      exports.help = {
        name: "nuke",
        description: "clones and deletes channel to remove all text",
        category: "Moderation"
      }
      
      exports.requirements = {
        userPerms: ["MANAGE_CHANNELS"], 
        clientPerms: ["MANAGE_CHANNELS"],
        ownerOnly: false
      }