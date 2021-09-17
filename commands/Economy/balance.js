const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "balance",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  aliases: ["bal", "bl"],
  cooldown: 5,
  permissions: [],
  description: "Check the user balance",
  async execute(client, message, cmd, args, Discord) {
    const user = message.mentions.users.first() || message.author;
    const bal = await client.bal(user.id);
    const bank = await client.bank(user.id)
    const debt = await client.debt(user.id)

    const newEmbed = new Discord.MessageEmbed()
      .setTimestamp()
      .setAuthor(`${user.username}\`s Balance`, user.displayAvatarURL({ dynamic: true }))
      .setColor('#34b7db')
      .setDescription(`**💸 Wallet \`${bal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins** \n**🏦 Bank \`${bank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins** \n**💰 Debt \`${debt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}\` Xocoins**`)
    message.lineReplyNoMention(newEmbed)
  },
};