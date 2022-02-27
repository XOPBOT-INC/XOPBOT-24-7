const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = async (Discord, client, message) => {
    client.on("guildCreate", (guild) => {

        let channelToSendTo;

        guild.channels.cache.forEach((channel) => {
            if (
                channel.type === 'text' &&
                !channelToSendTo &&
                channel.permissionsFor(guild.me).has("SEND_MESSAGES" || "EMBED_LINKS")
            )
                channelToSendTo = channel;
        });

        if (!channelToSendTo);

        const button11 = new MessageButton()
            .setStyle('url')
            .setURL('https://xopbot.glitch.me/')
            .setLabel('Website')
            .setEmoji(`💻`)

        const button12 = new MessageButton()
            .setStyle('url')
            .setURL('https://discord.com/oauth2/authorize?client_id=831824859066925087&scope=bot&permissions=4294967295')
            .setLabel('Invite')
            .setEmoji(`🔗`)

        const row3 = new MessageActionRow()
            .addComponents(button11, button12)

        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(`${color}`)
            .setAuthor(`You Added Me In ${message.guild.name}!`, message.guild.iconURL())
            .setDescription(`**Thank You For Inviting Me To \`${message.guild.name}\` \nName Is \`XOPBOT\` Im A Multipurpose Bot With Over 200+ Commands And \`24/7\` Uptime \nMy Prefix Is \`x!\` And You Can Get My Commands By Doing \`x!help\` \nYou Can Also Check Out My Websites Down Below⤵**`)
        channelToSendTo.send(embed, row3)
    })
}