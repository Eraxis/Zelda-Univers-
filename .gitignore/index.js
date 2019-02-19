const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    bot.user.setGame("Zelda Univers");
    console.log("Bot prêt !");
});

bot.login('NTQ3MTc4NDI2NzM0NDc3MzQy.D02KuA.sjSAGojTerYpuw99fFRfM__HCQ8');
