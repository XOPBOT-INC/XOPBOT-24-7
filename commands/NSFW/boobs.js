const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'boobs',
    cooldown: 3,
    nsfw: true,
    aliases: ['tits'],
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage: **Boobs**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('I Like Bigger Tits! :)')
                .setColor(`${color}`)
            message.lineReplyNoMention(embed_nsfw);
        });
    }
}