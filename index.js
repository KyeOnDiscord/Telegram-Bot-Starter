const fs = require("node:fs");
const { Telegraf } = require("telegraf");

require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Load all commands from the commands folder
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

let BotCommandArray = [];

for (const commandFile of commandFiles) {
  let exports = require("./commands/" + commandFile);
  if (exports.BotEvent) bot.use(exports.BotEvent);
  if (exports.BotCommand) BotCommandArray.push(exports.BotCommand);
}

bot.telegram.setMyCommands(BotCommandArray);

bot.launch();
// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
