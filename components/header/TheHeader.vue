<template>
    <header class="w-full relative header-bg">
        <div class="max-w-[1200px] mx-auto py-4 flex flex-col space-y-4">
            <div class="flex items-center justify-between">
                <Logo color="white" />
                <Menu />
            </div>
            <div class="p-4">
                <Filter />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import Filter from './Filter.vue';
import Menu from './Menu.vue';
</script>

<style scoped>
.header-bg::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 70%;
    background-color: #15803d;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
</style>