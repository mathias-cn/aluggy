<template>
    <div :class="classHeight" ></div>
</template>

<script setup lang="ts">
const { height } = defineProps<{
    height: 'full' | 'half'
}>()

const classHeight = computed(() => {
    if(height === 'full') {
        return 'h-[45px] w-[1px] bg-gray-300'
    }
    return 'h-[30px] w-[1px] bg-gray-300'
})
</script>