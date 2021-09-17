const lineReplyNoMention = require('discord-reply');
const color = process.env.Color;
module.exports = {
    name: 'rob',
    permissions: ["SEND_MESSAGES"],
    clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    cooldown: 20,
    description: "Rob Command!",
    async execute(client, message, cmd, args, Discord) {
        const maxtodep = 10000000;
        const user = message.mentions.users.first()
        if (!args[0]) {
            const nopr = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**\`(prefix)rob <@user>\`**`)
            return message.lineReplyNoMention(nopr)
        }

        if (message.mentions.users.first().bot) {
            const baduserrobbots = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`**You Can Not Rob Bot\`s . Thats Too Evil!**`)
            return message.lineReplyNoMention(baduserrobbots)
        }

        function random() {
            const num = Math.floor(Math.random() * 2)
            return num === 1
        }

        if (random() === true) {
            const RobAmount = Math.floor(Math.random() * 3000)
            if ((await client.bal(user.id)) < RobAmount) {
                const lessxocc = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**\`${user.username}\` Has Less Than \`${RobAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins For You To Rob!**`)
                return message.lineReplyNoMention(lessxocc)
            }
            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setTitle(`${message.author.username}`)
                .setDescription(`**Congrats You Have Stolen \`${RobAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins From \`${user.username}\`! 💸**`)
            message.lineReplyNoMention(embed)
            client.add(message.author.id, RobAmount)
            client.rmv(user.id, RobAmount)
        } else {
            const LooseAmount = Math.floor(Math.random() * 2000)
            if ((await client.bal(message.author.id)) < LooseAmount) {
                const debtembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor(`${color}`)
                    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(`**You Are Now In Debt For \`${LooseAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins!**`)
                message.lineReplyNoMention(debtembed)
                client.debtadd(message.author.id, LooseAmount)
            }
            const embed1 = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor(`${color}`)
                .setTitle(`${message.author.username}`)
                .setDescription(`**Awwww! You Just Lost \`${LooseAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins Better Luck Next Time! 💸**`)
            message.lineReplyNoMention(embed1)
            client.rmv(message.author.id, LooseAmount)
            client.add(user.id, LooseAmount)
        }
    }
}