const { owners } = require("../config");


module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;
   
    const args = message.content.split(/ +/g);
    const command = args.shift().slice(client.prefix.length).toLowerCase();
    const cmd = client.commands.get(command) || client.aliases.get(command);

    if (!message.content.toLowerCase().startsWith(client.prefix)) return;

    if (!cmd) return;
    if (!message.guild.me.permissions.has(["SEND_MESSAGES"])) return;

    if (cmd.requirements.ownerOnly && !message.author.id.includes(owners)) return;

    if (cmd.requirements.userPerms && !message.member.permissions.has(cmd.requirements.userPerms && !message.author.id.includes(owners)))
        return message.reply(`you are missing the following permissions: ${missingPerms(message.member, cmd.requirements.userPerms)}`);
    if (cmd.requirements.clientPerms && !message.guild.me.permissions.has(cmd.requirements.clientPerms))
        return message.reply(`I am missing the following permissions: ${missingPerms(message.guild.me, cmd.requirements.clientPerms)}`)

    cmd.run(client, message, args);
}

const missingPerms = (member, perms) => {
    const missingPerms = member.permissions.missing(perms)
        .map(str => `\`${str.replace(/_/g, ' ').toUpperCase()}\``);

    return missingPerms.length > 1 ?
        `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` :
        missingPerms[0];
}