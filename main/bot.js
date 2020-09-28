// Run dotenv
require('dotenv').config();

// Fs
const fs = require('fs');

// Discord client
const Discord = require('discord.js');
const client = new Discord.Client();

// Add all commands to the bot
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

// Ready to listen to commands
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Token
client.login(process.env.DISCORD_TOKEN);

// Digest messages
const prefix = "!";

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
  console.log(command + " " + args);
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
	}
});
