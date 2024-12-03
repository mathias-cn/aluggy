<template>
    <section class="max-w-[1200px] mx-auto py-8 space-y-4">
        <div>
            <h3 class="font-semibold text-3xl">{{ title }}</h3>
            <p v-if="hasSubtitle">{{ subtitle }}</p>
        </div>
        <slot></slot>
    </section>
</template>

<script setup lang="ts">
const { title, subtitle } = defineProps<{
    title: string,
    subtitle?: string
}>()
const hasSubtitle = ref(Boolean(subtitle))
</script>