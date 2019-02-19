const Discord = require('discord.js');
var bot = new Discord.Client();


bot.on('ready', function() {
    bot.user.setGame("Zelda Univers, https://discord.gg/gJdAfu6"); 
    console.log("Bot prêt !");
});

bot.login('NTQ3MTc4NDI2NzM0NDc3MzQy.D0y_hw.rQ1cy_gCQT3wI6U5U6WYpJe7zmk');
