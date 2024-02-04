<template>
    <span class="text-yellow-300 text-xl mr-4">{{ contador }}</span>
    <button @click="incrementar" class="border px-4 py-2 text-xl ">+</button>
    <button @click="decrementar" class="border px-4 py-2 text-xl ">-</button>
</template>
<script setup>
    import { ref } from 'vue';

    const contador = ref(0);

    function incrementar(){
        contador.value = contador.value + 1
    }

    function decrementar(){
        if(contador.value > 0)
            contador.value = contador.value - 1
    }
</script>