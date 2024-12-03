<template>
    <MainLayout>
        <section class="w-full mx-auto py-8 flex items-center justify-between">
            <div class="w-1/2 flex items-center justify-between flex-wrap gap-2 px-4">
                <ItemCard v-for="p in filteredPlaces" :place="p" />
            </div>
            <div class=" w-1/2">
                <h1>MAPPAAAAAA</h1>
            </div>
        </section>
    </MainLayout>
</template>

<script setup lang="ts">
import ItemCard from '~/components/s/ItemCard.vue';
import MainLayout from '~/layouts/MainLayout.vue';

const route = useRoute()
const id = route.query.cityId

const { places } = usePlacesStore()

const filteredPlaces = computed(() => {
    if(!id) {
        return places
    }
    return places.filter(p => p.city.id === Number(id))
})
</script>