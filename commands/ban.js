exports.run = async (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || args[0];   
    if (!member) return message.reply("please mention a valid user.")
    if (!member.bannable) return message.reply("I cannot ban this member.")
    
    try {
        await member.ban({ reason: `Banned by ${message.author.tag}` }).catch();
        message.channel.send(`\`${member.user.tag}\` was banned.`)
    } catch {
        try {
            await message.guild.members.ban(member.id, { reason: `Banned by ${message.author.tag}` });
            message.channel.send(`\`${member.user.tag}\` was banned.`)
        } catch (error) {
            message.reply("I cannot ban this member.")
        }
}
}

exports.help = {
    name: "ban",
    description: "bans someone from the server",
    category: "Moderation"
}

exports.requirements = {
    userPerms: ["BAN_MEMBERS"],
    clientPerms: ["BAN_MEMBERS"],
    ownerOnly: false
}