exports.run = async (client, message, args) => {

const user = await client.users.fetch(args[0])
if (!user) return message.reply("please specify a valid User ID.");

message.guild.members.ban(user, {reason: `Banned by ${message.author.tag}`}).then(() => message.channel.send(`\`${user.tag}\` was banned.`)).catch(() => message.reply(`please mention a valid user ID.`))



}

exports.help = {
    name: "hackban",
    description: "bans someone that isn't in the server",
    aliases: ["hban"],
    category: "Moderation"
}

exports.requirements = {
    userPerms: ["BAN_MEMBERS"],
    clientPerms: ["BAN_MEMBERS"],
    ownerOnly: false
}