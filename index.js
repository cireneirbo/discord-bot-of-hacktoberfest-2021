// the essentials - your packages
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const config = require('./config.json'); // handles the login/access of the bot

// required - confirms that the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// the action - all of your commands are run here
client.on('messageCreate', msg => {

  // show server id
  if (msg.content === "!commands") {
    commandsList.printCommands();
  } 
  // show server id
  if (msg.content === "!hello") {
    msg.reply(`hey ${msg.user}`);
  } 
});

client.login(config.token); // verifies that the bot is logged in with access