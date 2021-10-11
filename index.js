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
const {greetings} = require('./commands/greet');
const {ping} = require('./commands/ping');
// const {functionToSendToIndexDotJS} = require('./commands/example');
const token = process.env.token ?? config.token ?? "No Token was specified." //Gives clear warning to user if no token was specified.
const prefix = process.env.prefix ?? config.prefix ?? "!" //default to ! if no prefix is found
// ^^^^ keep file imports above this comment 

// Section C - confirms that the bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Section D - all of your commands are run here
// be sure to create your own 'if' statement below to run your commands
client.on('messageCreate', msg => {

  // show server info
  if (msg.content === `${prefix}server info`) {
    msg.channel.send(`${msg.guild.name} - ${msg.guild.id}`);
  }

  // say 'hello'
  if (msg.content === `${prefix}hello`) {
    msg.channel.send(printHello());
  } 

  //greet message
  if(msg.content === `${prefix}greet`) {
    msg.channel.send(greetings());
  }

  if(msg.content === `${prefix}ping`) {
    msg.channel.send(ping(client))
  }
});

client.on('guildMemberAdd', (member) => {
  member.send('Welcome to the server!');
})

// verifies that the bot is logged in with access
client.login(token); 