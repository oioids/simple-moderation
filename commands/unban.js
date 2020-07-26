exports.run = async (client, message, args) => {

const user = await client.users.fetch(args[0])
if (!user) return message.reply("please specify a valid User ID.");
    
message.guild.members.unban(user, {reason: `Unbanned by ${message.author.tag}`}).then(() => message.channel.send(`\`${user.tag}\` was unbanned.`)).catch(() => message.reply(`please mention a valid user ID.`))
    
    
    
    }
    
    exports.help = {
        name: "unban",
        description: "unbans someone by their ID",
        category: "Moderation"
    }
    
    exports.requirements = {
        userPerms: ["BAN_MEMBERS"],
        clientPerms: ["BAN_MEMBERS"],
        ownerOnly: false
    }