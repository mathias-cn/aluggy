<template>
    <NuxtLink :key="place.id" :to="'/place/' + place.id" class="shadow-md border-[1px] w-[calc(33%-0.15rem)] rounded-lg overflow-hidden">
        <div class="h-[160px] overflow-hidden flex items-center justify-center">
            <NuxtImg ~
                class="w-full"
                
                :src="place.imgUrl"
                format="webp"
                densities="x1"
                :alt="place.title" 
            />
        </div>
        <div class="w-full p-4">
            <h5 class="text-xl whitespace-nowrap overflow-hidden text-ellipsis">{{ place.title }}</h5>
            <span class="text-sm">{{ place.city.name }}</span>
            <RatingStars :value="place.rating.value" >
                <span class="pl-1">({{ place.rating.qty }})</span>
            </RatingStars>
            <div class="w-full mt-2 text-right">
                <div class="flex justify-end items-end gap-1">
                    <span v-if="place.discountedPrice" class="text-sm line-through opacity-65">R${{ place.regularPrice }},00</span>
                    <span class="text-xl font-semibold">R${{ mainPrice }},00</span>
                    <span>/noite</span>
                </div>
                <span>1-6 de nov.(5 noites)</span>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Place } from '~/types/global';
import RatingStars from '../home/destinosPopulares/RatingStars.vue';

const { place } = defineProps<{
    place: Place
}>()

const mainPrice = computed(() => {
    if(place.discountedPrice) return place.discountedPrice
    return place.regularPrice
})
</script>