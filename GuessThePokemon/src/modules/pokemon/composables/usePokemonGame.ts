import { onMounted, ref } from 'vue';
import { GameStatus, type PokemonListResponse } from '../interfaces';
import axios from 'axios'

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const api = "https://pokeapi.co/api/v2/pokemon"

    const getPokemons = async () => {
      const response = await axios.get<PokemonListResponse>(api+"/?limit=151");
      
      console.log(response.data.results);
    }

    onMounted(() => {
      getPokemons();
    })

    return {
      gameStatus,
    };
}