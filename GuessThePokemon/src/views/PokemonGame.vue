<template>
    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>
    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">¿Cual es este Pokémon?</h1>
        <PokemonPicture/>
        <PokemonOptions/>
    </section>
</template>

<script setup lang="ts">
    import "@/assets/styles.css"
    import PokemonPicture from "@/modules/pokemon/components/PokemonPicture.vue";
    import PokemonOptions from "@/modules/pokemon/components/PokemonOptions.vue";
import { usePokemonGame } from "@/modules/pokemon/composables/usePokemonGame";

    const { gameStatus } = usePokemonGame();
</script>

<style></style>