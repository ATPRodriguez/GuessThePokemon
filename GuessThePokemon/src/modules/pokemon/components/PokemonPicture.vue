<template>
    <section class="flex flex-col justify-center items-center w-screen">
        <img v-if="!showPokemon" class="w-[200px] h-[200px] brightness-0" :src="pokemonImage" alt="ditto.png">
        <img v-else class="w-[200px] h-[200px]" :src="pokemonImage" alt="ditto.png">
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    pokemonId:number
    showPokemon?:boolean
}
const props = withDefaults(defineProps<Props>(), {showPokemon: false});
const pokemonImage = computed (() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonId}.png`)
</script>

<style></style>