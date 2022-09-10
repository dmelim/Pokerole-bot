import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getPokemon = async (pokemon) => {
  try {
    let info = await axios.get(process.env.url + pokemon.toLowerCase());
    let { sprites } = await info.data;
    const img = sprites.other["official-artwork"].front_default;
    return img;
  } catch (error) {
    return error.response.data;
  }
};
export default getPokemon;
