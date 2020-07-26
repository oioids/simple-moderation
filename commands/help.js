const Discord = require("discord.js");
const { owners, prefix, color } = require("../config");

exports.run = async (client, message, args) => {
    const command = client.commands.get(args[0]) || null;
    if (command) {
   return message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Command: ${command.help.name}`)
    .addField("Description", command.help.description || "No description.", true)
    .addField("Aliases", command.help.aliases || "No Aliases.", true)
    .setColor(color)
    );
    };

    const embed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .addField("Commands", `${client.commands.map(cmd => cmd.help.name).join(", ")}`)
    .setFooter(`Run ${prefix}help <command name> for more info`)
    .setColor(color)

    return message.channel.send(embed);
    
    

    
   }
   
   exports.help = {
     name: "help",
     aliases: ["commands", "cmds"],
     description: "displays a list of available command,",
     category: "Information"
   }
   
   exports.requirements = {
     userPerms: ["SEND_MESSAGES"], 
     clientPerms: ["SEND_MESSAGES"],
     ownerOnly: false
   }