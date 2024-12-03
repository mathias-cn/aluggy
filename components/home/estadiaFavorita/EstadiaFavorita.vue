<template>
    <HomeSectionContainer title="Descubra sua estadia favorita">
        <div class="w-full overflow-x-auto flex items-center justify-between gap-[1%]">
            <CardEstadiaFavorita
                link-to="#"
                text="Pé na areia"
                img-src="/pe-na-areia.jpg"
            />
            <CardEstadiaFavorita
                link-to="#"
                text="Natureza"
                img-src="/natureza.jpg"
            />
            <CardEstadiaFavorita
                link-to="#"
                text="Chalé"
                img-src="/chale.jpg"
            />
            <CardEstadiaFavorita
                link-to="#"
                text="Pet-Friendly"
                img-src="/pet-friendly.jpg"
            />
            <CardEstadiaFavorita
                link-to="#"
                text="Piscina"
                img-src="/piscina.jpg"
            />
        </div>
    </HomeSectionContainer>
</template>

<script setup lang="ts">
import CardEstadiaFavorita from '~/components/home/estadiaFavorita/CardEstadiaFavorita.vue';
</script>