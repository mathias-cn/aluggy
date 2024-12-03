<template>
    <NuxtLink to="/" class="flex items-center gap-1" :class="textColor">
        <LucideTreePalm :size="35" />
        <span class="text-4xl font-bold">aluggy</span>
    </NuxtLink>
</template>

<script setup lang="ts">

    const { color } = defineProps<{
        color: 'white' | 'green'
    }>()

    const textColor = computed(() => {
        if(color === 'white') {
            return 'text-white'
        }
        return 'text-green-700'
    })

</script>