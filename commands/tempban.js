const ms = require('ms');
exports.run = async (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || args[0];
    if (!member) return message.reply("please mention a valid user.")
    if (!member.bannable) return message.reply("I cannot ban this member.")

    let time = args[1] || "no time provided."
    if (!time) return message.reply('please specify a time.')

    await member.ban({ reason: `Banned by ${message.author.tag}` }).catch();
    message.channel.send(`\`${member.user.tag}\` was banned.`)

    setTimeout(function () {
        message.guild.members.unban(member)

    }, ms(time))


}

exports.help = {
    name: "tempban",
    description: "temporarily bans someone from the server",
    category: "Moderation"
}

exports.requirements = {
    userPerms: ["BAN_MEMBERS"],
    clientPerms: ["BAN_MEMBERS"],
    ownerOnly: false
}