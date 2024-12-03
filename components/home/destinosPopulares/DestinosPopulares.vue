<template>
    <HomeSectionContainer title="Explore destinos populares" subtitle="Economize mais alugando pela alugui ;)">
        <div class="w-full divide-y-[1px] divide-gray-300">
            <div class="flex items-center justify-start">
                <TabButton v-for="c in citiesToRender" 
                    :key="c.id"  
                    @tab-clicked="handleTabClick" 
                    :is-active="activeTab === c.id" :id="c.id"
                >{{ c.name }}</TabButton>
            </div>

            <div class="relative w-full" @mouseenter="enterHover" @mouseleave="leaveHover">
                <button v-if="isHovered && activeBtn === 'start'" @click="scrollToStart" class="absolute z-10 left-4 top-[calc(50%-20px)] bg-green-700 text-white h-fit p-2 rounded-full shadow-lg">
                    <LucideArrowLeft />
                </button>

                <div ref="scrollContainer" class="relative w-full overflow-x-auto flex items-center justify-between gap-[1%] pt-3 scroll scrollbar-hide">
                    <CardDestinosPopulares v-for="p in placesToRender"
                        :key="p.id"
                        :destiny="p"
                    />
                </div>

                <button v-if="isHovered && activeBtn === 'end'" @click="scrollToEnd" class="absolute z-10 right-4 top-[calc(50%-20px)] bg-green-700 text-white h-fit p-2 rounded-full shadow-lg">
                    <LucideArrowRight />
                </button>
            </div>
        </div>
    </HomeSectionContainer>
</template>

<script setup lang="ts">
    import { useCitiesStore } from '~/stores/cities';

    import TabButton from './TabButton.vue';
    import CardDestinosPopulares from './CardDestinosPopulares.vue';
    import { usePlacesStore } from '../../../stores/places';
    import { useSlider } from '~/hooks/useSlider';

    const { cities } = useCitiesStore()
    const { places } = usePlacesStore()
    
    const citiesToRender = cities.slice(0, 6)
    const placesToRender = computed(() => {
        return places.filter(p => p.city.id === activeTab.value)
    })

    const activeTab = ref(Number(citiesToRender[0].id))

    function handleTabClick(id: number) {
        activeTab.value = id
        scrollToStart()
    }

    const {
        scrollContainer,
        activeBtn,
        isHovered,
        scrollToStart,
        scrollToEnd,
        enterHover,
        leaveHover
    } = useSlider()
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>