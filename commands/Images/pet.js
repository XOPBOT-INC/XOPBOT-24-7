const Discord = require("discord.js");
const lineReplyNoMention = require('discord-reply');
module.exports = {
  name: "pet",
  permissions: ["SEND_MESSAGES"],
  clientpermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  cooldown: 5,
  description: "Image Manipulation Command",
  async execute(client, message, cmd, args, Discord) {

    const user = message.mentions.users.first() || message.member;
    const avatar = user.displayAvatarURL({ size: 2048, format: "png" });


    // const embed = new Discord.MessageEmbed()
    //   .setTimestamp()
    //   .setTitle('PET')
    //   .setColor('#c30202')
    //   .setImage(`https://api.popcat.xyz/pet?image=${avatar}`)

    // message.lineReplyNoMention(embed)

    message.lineReplyNoMention({ files: [{ attachment: `https://api.popcat.xyz/pet?image=${avatar}`, name: "xopbotpet.gif" }] });
  }
}