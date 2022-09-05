import { Client, GatewayIntentBits } from "discord.js";
import randomNum from "./randomNum.js";
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

  switch (commandName) {
    case "d4":
      const RandomD4 = randomNum(4);
      await interaction.reply(RandomD4.toString());
      break;
    case "d6":
      const RandomD6 = randomNum(6);
      await interaction.reply(RandomD6.toString());
      break;
    case "d8":
      const RandomD8 = randomNum(8);
      await interaction.reply(RandomD8.toString());
      break;
    case "d10":
      const RandomD10 = randomNum(10);
      await interaction.reply(RandomD10.toString());
      break;
    case "d12":
      const RandomD12 = randomNum(12);
      await interaction.reply(RandomD12.toString());
      break;
    case "d20":
      const RandomD20 = randomNum(20);
      await interaction.reply(RandomD20.toString());
      break;

    default:
      await interaction.reply("Command not found");
      break;
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
