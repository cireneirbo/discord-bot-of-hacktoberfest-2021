// Section A - the essentials - your most necessary packages
const Discord = require('discord.js'); // api we are primarily using to run the bot
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); //initializes client permissions
const config = require('./config.json'); // handles the login/access of the bot
require('dotenv').config(); // processes .env key/values

// Section B - imported files/commands
// to import your own file after creating one like 'example.js', at the bottom of this import block 
// put your exported functions in the '{}' and reference your file in the commands folder with './commands/yourfile'
const {printHello} = require('./commands/hello'); // this imports the file 'hello.js'. be sure to include all of the functions you created in your own file within the '{}' and separated by commas.
const {printServerID} = require('./commands/server');
// const {functionToSendToIndexDotJS} = require('./commands/example');


// ^^^^ keep file imports above this comment 

// Section C - confirms that the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Section D - all of your commands are run here
// be sure to create your own 'if' statement below to run your commands
client.on('messageCreate', msg => {

  // show server id
  if (msg.content === "!server id") {
    let nameOfGuild = printServerID() + ".name";
    msg.channel.send(msg.guild.name);
    //msg.channel.send(msg.nameOfGuild);
    //console.log(nameOfGuild);
  } 
  // say 'hello'
  if (msg.content === "!hello") {
    msg.channel.send(printHello());
  } 
});

// verifies that the bot is logged in with access
client.login(process.env.token); // .env files allow you to host your bot on heroku.com
// to use the config.json instead use:
// client.login(config.token);