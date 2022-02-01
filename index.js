const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if ( message.content == "Hello Yousef"){
        message.reply("Hi there fellow user!")
    }else if ( message.content == "Ping!"){
        message.reply(":ping_pong: Pong!")
    } 
})

client.login(process.env.TOKEN) 