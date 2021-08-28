// the essentials - your packages
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILD_MESSAGES"]});
const config = require('./config.json'); // handles the login/access of the bot

// required - confirms that the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//array of all commands
const commands = ['!commands', '!helloworld'];

// the action - all of your commands are run here
client.on('message', msg => {

  // show server id
  if (msg.content === commands[0]) {
    commandsList.printCommands();
  } 
  // show server id
  if (msg.content === commands[1]) {
    msg.reply(`hello eric`);
  } 
});

client.login(config.token); // verifies that the bot is logged in with access