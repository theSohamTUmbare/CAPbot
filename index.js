require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => { 
    if (message.author.bot) return; 
    message.reply({ 
        content: "Hi From Bot", 
    });
});

client.login(
    process.env.SECRET_TOKEN
)