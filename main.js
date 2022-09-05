import { Client, GatewayIntentBits } from "discord.js";
import multipleDice from "./randomNum.js";
import dotenv from "dotenv";
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  let times;
  let throws;

  switch (commandName) {
    case "d4":
      times = interaction.options.getNumber("num");
      throws = times ? multipleDice(times, 4) : multipleDice(1, 4);
      await interaction.reply("Here are the throws: " + throws.toString());
      break;
    case "d6":
      times = interaction.options.getNumber("num");
      throws = times ? multipleDice(times, 6) : multipleDice(1, 6);
      await interaction.reply("Here are the throws: " + throws.toString());
      break;
    case "d8":
      times = interaction.options.getNumber("num");
      throws = times ? multipleDice(times, 8) : multipleDice(1, 8);
      await interaction.reply("Here are the throws: " + throws.toString());
      break;
    case "d10":
      times = interaction.options.getNumber("num");
      throws = times ? multipleDice(times, 10) : multipleDice(1, 8);
      await interaction.reply("Here are the throws: " + throws.toString());
      break;
    case "d12":
      times = interaction.options.getNumber("num");
      throws = times ? multipleDice(times, 12) : multipleDice(1, 12);
      await interaction.reply("Here are the throws: " + throws.toString());
      break;
    case "d20":
      times = interaction.options.getNumber("num");
      throws = times ? multipleDice(times, 20) : multipleDice(1, 20);
      await interaction.reply("Here are the throws: " + throws.toString());
      break;

    default:
      await interaction.reply("Command not found");
      break;
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
