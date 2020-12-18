const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Hey Hunter, your bot is now online!');
    client.user.setActivity('Snowpiercer | ?info');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    } else if(command == 'say'){
        client.commands.get('say').execute(message, args);
    } else if(command == 'rules'){
        client.commands.get('rules').execute(message, args);
    } else if(command == 'ssu'){
        client.commands.get('ssu').execute(message, args);
    } else if(command == 'members'){
        client.commands.get('members').execute(message, args);
    } else if(command == 'info'){
        client.commands.get('info').execute(message, args);
    }
})
client.login('NzUyNzE2NDM1NTg2OTQwOTgw.X1brzw.AKr--Wt5my1oFC3ZJOrHxDVKFI0');