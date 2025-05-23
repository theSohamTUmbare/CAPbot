const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'cap',
    description: 'Generate a caption for your image',
    options: [
      {
        name: 'image',
        description: 'The image to caption',
        type: 11,        // 11 = ATTACHMENT
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.SECRET_TOKEN); 

(async () => {
    try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CANDIDATE_KEY), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
    console.error(error);
    }
}) ();
