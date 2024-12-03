<template>
    <LucideStar v-if="mode === 'full'" fill="#fcba03" :stroke-width="1" :size="17" />
    <div v-else-if="mode === 'half'" class="relative" style="width: 17px; height: 17px;">
        <LucideStar fill="#fcba03" :stroke-width="1" :size="17" class="absolute left-0 top-0" style="clip-path: inset(0 50% 0 0);" />
        <LucideStar :stroke-width="1" :size="17" class="absolute left-0 top-0" style="clip-path: inset(0 0 0 50%);" />
    </div>
    <LucideStar v-else-if="mode === 'empty'" :stroke-width="1" :size="17" />
</template>

<script setup lang="ts">
    const { mode } = defineProps<{
        mode: 'full' | 'half' | 'empty'
    }>()
</script>