<template>
    <button :class="classes" @click="emit('tab-clicked', id)">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    const { isActive } = defineProps<{
        isActive: boolean,
        id: number
    }>()

    const classes = computed(() => {
        if(isActive) return 'px-4 py-2 border-b-2 border-b-green-700 text-green-700 transition-all'
        return 'px-4 py-2 border-b-2 border-b-transparent hover:border-b-gray-300 transition-all'
    })

    const emit = defineEmits(['tab-clicked'])

</script>