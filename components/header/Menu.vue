<template>
    <div class="flex gap-2 items-center justify-end">
        <NuxtLink to="#" class="flex items-center gap-1 px-4 py-2 rounded-full border-[1px] border-green-700 bg-green-700 text-white transition-all">
            <LucideThumbsUp class="hover:text-white" :size=20 :stroke-width="2" />
            <span>Anuncie aqui!</span>
        </NuxtLink>
        <NuxtLink to="/auth" class="flex items-center gap-1 px-4 py-2 rounded-full border-[1px] border-white bg-white text-green-700 transition-all">
            <LucideUser :size=20 :stroke-width="2" />
            <span>Login/Cadastrar-se</span>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

</script>