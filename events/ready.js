const { prefix } = require("../config")

module.exports = (client) => {
    console.log(`This is: ${client.user.tag}`);
    client.user.setPresence({
        activity: {
            name: `${prefix}help`, type: "PLAYING",
        }, status: "online"
    });
}