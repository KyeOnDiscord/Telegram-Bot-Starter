const { Telegraf } = require("telegraf");

require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command("oldschool", (ctx) => ctx.reply("Hello"));
bot.command("hipster", Telegraf.reply("λ"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
