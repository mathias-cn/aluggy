<template>
    <div class="mx-auto w-full">
        <TheHeader />
            <slot />
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import TheFooter from '~/components/footer/TheFooter.vue';
import TheHeader from '~/components/header/TheHeader.vue';


</script>