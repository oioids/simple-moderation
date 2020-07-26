exports.run = async (client, message, args) => {

const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || null;   
if (!member ) return message.reply("please provide a valid user.")
if (!member.bannable) return message.reply("I cannot kick this member.")

await member.kick({ reason: `Kicked by ${message.author.tag}` })
message.channel.send(`\`${member.user.tag}\` was kicked.`).catch(() => `I couldn't kick this user.`)



}
exports.help = {
    name: "kick",
    description: "kicks someone from the server",
    category: "Moderation"
}

exports.requirements = {
    userPerms: ["KICK_MEMBERS"],
    clientPerms: ["KICK_MEMBERS"],
    ownerOnly: false
}