exports.run = async (client, message, args) => {

if (!args[0]) return message.reply("please enter a specific amount to clear.")

if (args[0] > 100) {
  return message.reply("I cannot delete messages over 100.")
} else if (args[0] < 2) {
    return message.reply("I cannot delete messages under 2.")
};
message.delete();
message.channel.bulkDelete(args[0]);
message.channel.send(`\`${args[0]}\` messages deleted.`)

    


}
  
  exports.help = {
    name: "purge",
    aliases: ["clean", "prune", "clear"],
    description: "deletes a certain amount of messages in the chat",
    category: "Moderation"
  }
  
  exports.requirements = {
    userPerms: ["MANAGE_MESSAGES"], 
    clientPerms: ["MANAGE_MESSAGES"],
    ownerOnly: false
  }