const { Composer } = require("telegraf");

const CommandName = "hello";
const CommandDescription = "Says Hello";

module.exports = {
  BotCommand: { command: CommandName, description: CommandDescription },
  BotEvent: Composer.command(CommandName, async (ctx) => {
    {
      ctx.reply("Hello " + ctx.from.first_name);
    }
  }),
};
