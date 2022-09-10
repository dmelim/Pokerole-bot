import { Client, GatewayIntentBits } from "discord.js";
import multipleDice from "./randomNum.js";
import getPokemon from "./fetchPokemon.js";
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
    case "getpokemon":
      let pokemon = interaction.options.getString("input");
      await interaction.reply(`A wild ${pokemon} appears!`);
      await interaction.followUp(await getPokemon(pokemon));
      break;
    case "damagetypechart":
      await interaction.reply(
        "https://www.pokeroleproject.com/_files/ugd/0fa3fd_5ff900ed194a4a4aa8dd4a35554aef7b.pdf"
      );
      break;
    case "misterydungeon":
      await interaction.reply(
        "http://www.mediafire.com/download/vv6nke1tpexjae2/Pokerole+Mystery+Dungeon.pdf?fbclid=IwAR0YXgZJRf2Cps1qmSY3mw-SN7bBcqiKeGjm9_guqBd6GPDz6UMjpFBh5nA"
      );
      break;
    case "corebook":
      await interaction.reply(
        "http://www.mediafire.com/file/lmy748dyica8wu6/POKEROLE_COREBOOK_2.0.pdf/file?fbclid=IwAR0wmrosku4hu3po9BqkvhC7t6jnIqapmSrwC8mrp8PKAVunXVmz_k8lBl8"
      );
      break;
    default:
      await interaction.reply("Command not found");
      break;
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
