<template>
    <div class="flex items-center">
        <Star v-for="(m, i) in toRender" :key="i" :mode="m" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import Star from './Star.vue';

    const { value } = defineProps<{
        value: number
    }>()

    const toRender = computed(() => {
        const modes: ('full' | 'half' | 'empty')[] = [];

        const fullStars = Math.floor(value); // Estrelas cheias
        const hasHalfStar = value % 1 >= 0.5; // Verifica se existe uma meia estrela

        // Adiciona as estrelas cheias
        for (let i = 0; i < fullStars; i++) {
            modes.push('full');
        }

        // Adiciona a meia estrela se existir
        if (hasHalfStar) {
            modes.push('half');
        }

        // Adiciona estrelas vazias até completar 5
        const emptyStars = 5 - modes.length;
        for (let i = 0; i < emptyStars; i++) {
            modes.push('empty');
        }

        return modes;
    });
</script>