import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import axios, { spread } from 'axios'

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);
    const api = "https://pokeapi.co/api/v2/pokemon"
    const pokemons = ref<Pokemon[]>([]);
    const pokemonOptions = ref<Pokemon[]>([]);


    const isLoading = computed(() => pokemons.value.length === 0);

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
      
      return pokemonsArray.sort(() => {return 0.5 - Math.random();});
    }

    const getNextOptions = (howMany : number = 4) => {
        gameStatus.value = GameStatus.Playing;
        pokemonOptions.value = pokemons.value.slice(0,howMany);
        pokemons.value = pokemons.value.slice(howMany);
    }

    const randomPokemon = computed(() => {
        const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
        return pokemonOptions.value[randomIndex];
    })

    const checkAnswer = (id:number) => {
        const hasWon = randomPokemon.value.id === id;

        if (hasWon) {
            gameStatus.value = GameStatus.Won;
            confetti({
                particleCount: 300,
                spread: 150,
                origin: { y: 0.6 },
            });
            return;
        }

        gameStatus.value = GameStatus.Lost;
    }

    onMounted(async() => {
        pokemons.value = await getPokemons();
        getNextOptions();

    })

    return {
      gameStatus,
      isLoading,
      pokemonOptions,
      randomPokemon,

      getNextOptions,
      checkAnswer
    };
}