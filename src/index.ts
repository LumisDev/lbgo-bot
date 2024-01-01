import express from 'express'
import {Client, GatewayIntentBits} from 'discord.js'
import {config} from 'dotenv'
import serverless from 'serverless-http'
config()
const app = express()
const discordClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})
discordClient.on('ready', () => {
    console.log(`Bot is ready ID=${discordClient.user?.id}`)
})
discordClient.login(process.env.DISCORD_TOKEN)
app.use(express.json())
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World',
    })
})

export const handler = serverless(app)
