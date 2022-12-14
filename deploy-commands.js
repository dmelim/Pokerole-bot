import { SlashCommandBuilder, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import dotenv from "dotenv";
dotenv.config();

const commands = [
  new SlashCommandBuilder()
    .setName("d4")
    .setDescription("Replies with number between 1 and 4!")
    .addNumberOption((option) =>
      option.setName("num").setDescription("Number of dice?")
    ),
  new SlashCommandBuilder()
    .setName("d6")
    .setDescription("Replies with number between 1 and 6!")
    .addNumberOption((option) =>
      option.setName("num").setDescription("Number of dice?")
    ),
  new SlashCommandBuilder()
    .setName("d8")
    .setDescription("Replies with number between 1 and 8!")
    .addNumberOption((option) =>
      option.setName("num").setDescription("Number of dice?")
    ),
  new SlashCommandBuilder()
    .setName("d10")
    .setDescription("Replies with number between 1 and 10!")
    .addNumberOption((option) =>
      option.setName("num").setDescription("Number of dice?")
    ),
  new SlashCommandBuilder()
    .setName("d12")
    .setDescription("Replies with number between 1 and 12!")
    .addNumberOption((option) =>
      option.setName("num").setDescription("Number of dice?")
    ),
  new SlashCommandBuilder()
    .setName("d20")
    .setDescription("Replies with number between 1 and 20!")
    .addNumberOption((option) =>
      option.setName("num").setDescription("Number of dice?")
    ),
  new SlashCommandBuilder()
    .setName("getpokemon")
    .setDescription("Replies with an image of a pokemon!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("Name of the Pokemon?")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName("damagetypechart")
    .setDescription("Replies with an image of the damage charts!"),
  new SlashCommandBuilder()
    .setName("misterydungeon")
    .setDescription("Replies with the mistery dungeon module download!"),
  new SlashCommandBuilder()
    .setName("corebook")
    .setDescription("Replies with the pokerole corebook download!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    { body: commands }
  )
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
