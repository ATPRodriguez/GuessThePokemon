<template>
    <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>
    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">¿Cual es este Pokémon?</h1>
        <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.Playing"/>
        <PokemonOptions :options="options" :blockSelection="gameStatus!==GameStatus.Playing" @selected-option="checkAnswer"/>
    </section>
</template>

<script setup lang="ts">
    import "@/assets/styles.css"
    import PokemonPicture from "@/modules/pokemon/components/PokemonPicture.vue";
    import PokemonOptions from "@/modules/pokemon/components/PokemonOptions.vue";
import { usePokemonGame } from "@/modules/pokemon/composables/usePokemonGame";
import { GameStatus } from "@/modules/pokemon/interfaces";

    const { gameStatus, isLoading, randomPokemon, pokemonOptions: options, checkAnswer} = usePokemonGame();

    const onSelectedOption = (value: number) => {
        console.log({value});
    }
</script>

<style></style>