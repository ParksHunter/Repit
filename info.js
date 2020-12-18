const discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'info command', 
    execute(message, args){
        message.channel.send({embed: {
            color: 3447003,
            title: `This Bot is an Assistance and Soon to be Moderation bot for the Wilford Industries Discord Server! We have ${message.guild.memberCount} Members! Be Sure to join the group!`,
            footer: {
                text: "Wilford Industies | Snowpiercer"

            }
            }
        })
    }
}