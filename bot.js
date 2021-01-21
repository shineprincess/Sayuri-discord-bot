require("dotenv").config()

const Discord  = require("discord.js")
const client = new Discord.Client()

client.on("ready" , () => (
    console.log("Our bot is ready to go ")
))

client.on('message', msg => {
    if(msg.content === '!mod-me'){
        // msg.channel.send('Not tagged')
        msg.reply('Get Around And learn with me! ')
    }
})

client.login(process.env.BOT_TOKEN)