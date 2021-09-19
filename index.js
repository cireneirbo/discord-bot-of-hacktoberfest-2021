// the essentials - your packages
const Discord = require('discord.js'); // api we are primarily using to run the bot
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); //initializes client permissions
const config = require('./config.json'); // handles the login/access of the bot
const {printHello} = require('./commands/hello'); // this imports the file 'hello.js'. be sure to include all of the functions you created in your own file within the '{}' and separated by commas.
const {printServerID} = require('./commands/server');

// required - confirms that the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// the action - all of your commands are run here
// be sure to create your own 'if' statement below to run your commands
client.on('messageCreate', msg => {

  // show server id
  if (msg.content === "!server id") {
    let nameOfGuild = printServerID();
    msg.channel.send(msg.guild.name);
    msg.channel.send(msg.nameOfGuild);
  } 
  // say 'hello'
  if (msg.content === "!hello") {
    msg.channel.send(printHello());
  } 
});

client.login(config.token); // verifies that the bot is logged in with access