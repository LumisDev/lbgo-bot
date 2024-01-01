"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
const serverless_http_1 = __importDefault(require("serverless-http"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const discordClient = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
    ],
});
discordClient.on('ready', () => {
    console.log(`Bot is ready ID=${discordClient.user?.id}`);
});
discordClient.login(process.env.DISCORD_TOKEN);
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World',
    });
});
exports.handler = (0, serverless_http_1.default)(app);
