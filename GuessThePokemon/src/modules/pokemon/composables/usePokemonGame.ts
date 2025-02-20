import { onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import axios from 'axios'

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const api = "https://pokeapi.co/api/v2/pokemon"

    const getPokemons = async (): Promise<Pokemon[]> => {
      const response = await axios.get<PokemonListResponse>(api+"/?limit=151");
      
      const pokemonsArray = response.data.results.map( pokemon => {
        const urlParts = pokemon.url.split("/");
        const id = urlParts[urlParts.length - 2] ?? 0;
        return {
            name : pokemon.name,
            id: +id
        }
      })

      console.log(pokemonsArray);
      
      return pokemonsArray.sort(() => {return 0.5 - Math.random();});
    }

    onMounted(() => {
      getPokemons();
    })

    return {
      gameStatus,
    };
}