const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'hthigh',
    cooldown: 3,
    premium: true,
    nsfw: true,
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    async execute(client, message, cmd, args, Discord) {

        var superagent = require('superagent');

        if (!message.channel.nsfw) return message.lineReplyNoMention({ content: '**This Is Not A NSFW Channel! 🔞**' })

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'hthigh' }).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage: **Hentai Thigh**\n**[Provided To You By The Bot Supporters Of XOPBOT](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter('OHHH, Anime Thigh!:)')
                .setColor(`${color}`)
            message.lineReplyNoMention(embed_nsfw);
        });
    }
}