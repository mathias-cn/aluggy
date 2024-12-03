import { Link } from '../../.nuxt/components';
<template>
    <NuxtLink :to="linkTo" class="shrink-0 relative card-estadia overflow-hidden flex items-end p-4 w-[19%] h-64 rounded-xl">
        <span class="text-lg z-[2] text-white">{{ text }}</span>
        <NuxtImg 
            :src="imgSrc"
            format="webp"
            densities="x1"
            :alt="text" 
            width="100%"
            class="absolute inset-0 z-[-1]"
        />
    </NuxtLink>
</template>

<script setup lang="ts">
    const props = defineProps<{
        text: string,
        imgSrc: string,
        linkTo: string
    }>()
</script>

<style scoped>
.card-estadia::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 30%; /* Ajuste conforme necessário para que o degradê seja visível */
    background-image: linear-gradient(to top, rgba(0,0,0,.9), transparent);
    content: '';
    z-index: 1; /* Certifique-se de que está acima da imagem */
}
</style>