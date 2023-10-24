const { Composer } = require("telegraf");

const CommandName = "dice";
const CommandDescription = "Roll a 6 sided dice";

module.exports = {
  BotCommand: { command: CommandName, description: CommandDescription },
  BotEvent: Composer.command(CommandName, async (ctx) => {
    {
      //Random number from 1 - 6
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      ctx.reply("You rolled a " + randomNumber);
    }
  }),
};
