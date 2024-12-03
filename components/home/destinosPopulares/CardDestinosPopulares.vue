<template>
    <NuxtLink to="#" class="border-[1px] border-gray-300 shrink-0 overflow-hidden flex flex-col w-[22%] rounded-xl">
        <div class="h-[160px] overflow-hidden flex items-center justify-center">
            <NuxtImg 
                width="100%" 
                :src="destiny.imgUrl"
                format="webp"
                densities="x1"
                :alt="destiny.title" 
            />
        </div>
        <div class="w-full p-3">
            <h5 class="text-lg whitespace-nowrap overflow-hidden text-ellipsis">{{ destiny.title }}</h5>
            <span class="text-sm">{{ destiny.city.name }}</span>
            <RatingStars :value="destiny.rating.value" >
                <span class="pl-1">({{ destiny.rating.qty }})</span>
            </RatingStars>
            <div class="w-full mt-2 text-right">
                <div class="flex justify-end items-end gap-1">
                    <span v-if="destiny.discountedPrice" class="text-sm line-through opacity-65">R${{ destiny.regularPrice }},00</span>
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
import RatingStars from './RatingStars.vue';

const { destiny } = defineProps<{
    destiny: Place
}>()

const mainPrice = computed(() => {
    if(destiny.discountedPrice) return destiny.discountedPrice
    return destiny.regularPrice
})
</script>