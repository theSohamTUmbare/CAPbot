require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const FormData = require('form-data');

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", (message) => { 
    if (message.author.bot) return; 
    message.reply({  
        content: "Hi From Bot", 
    });
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!!!');

  } else if (commandName === 'cap') {
    await interaction.deferReply();  // in case the API takes a moment

    const attachment = interaction.options.getAttachment('image');
    if (!attachment.contentType.startsWith('image/')) {
      return interaction.editReply('Please upload a valid image file.');
    }

    try {
      const imageResponse = await axios.get(attachment.url, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(imageResponse.data, 'binary');

      const form = new FormData();
      form.append('file', buffer, { filename: 'input.jpg' });

      const apiRes = await axios.post(
        'http://localhost:8000/predict',
        form,
        { headers: form.getHeaders() }
      );

      const { caption } = apiRes.data;
      await interaction.editReply(`Caption: **${caption}**`);

    } catch (err) {
      console.error(err);
      await interaction.editReply('❌ Something went wrong generating your caption.');
    }
  }
});


client.login(
    process.env.SECRET_TOKEN
)