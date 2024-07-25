<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<template>
    <h1>adc produtos</h1>
    <button @click="showModal = true">+</button>
    <model-add-category v-if="showModal" @close="showModal = false" />
</template>

<style>

</style>