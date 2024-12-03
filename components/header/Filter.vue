<template>
    <div 
        class="relative bg-white text-sm flex items-center justify-center gap-2 p-3 w-fit mx-auto shadow-md rounded-full border-[1px] border-gray-300" 
        @click="focusInput"
        ref="inputContainer"
    >
        <div class="flex items-center justify-start gap-1">
            <LucideMap :size="30" :stroke-width="1" />
            <div class="flex flex-col">
                <label for="where" class="opacity-80 font-medium">Onde</label>
                <input 
                    ref="citiesInput"
                    class="outline-none" 
                    type="text" 
                    id="where" 
                    name="where" 
                    placeholder="Buscar Destinos"
                    v-model="searchQuery" 
                    @input="filterCities"
                    @focus="citiesModalActive = true"
                >
            </div>
        </div>
        <FilterDivider height="full" />
        <div class="flex items-center gap-2">
            <LucideCalendarArrowUp :size="30" :stroke-width="1" />
            <div class="flex items-center justify-start gap-1">
                <div class="flex flex-col max-w-[70px]">
                    <label for="where" class="opacity-80 font-medium">Entrada</label>
                    <input type="text" id="where" name="where" placeholder="--/--/--" class="max-w-[70px] outline-none">
                </div>
            </div>
            <FilterDivider height="half" />
            <div class="flex items-center justify-start gap-1">
                <div class="flex flex-col max-w-[70px]">
                    <label for="where" class="opacity-80 font-medium">Saída</label>
                    <input type="text" id="where" name="where" placeholder="--/--/--" class="max-w-[70px] outline-none">
                </div>
            </div>
        </div>
        <FilterDivider height="full" />
        <div class="flex items-center justify-start gap-1">
            <LucideUser :size="30" :stroke-width="1" />
            <div class="flex flex-col">
                <label for="where" class="opacity-80 font-medium">Pessoas</label>
                <input class="outline-none" type="text" id="where" name="where" placeholder="Nº de hóspedes">
            </div>
        </div>
        
        <NuxtLink @click.stop :to="linkToSearch" class="bg-green-700 text-white size-10 rounded-full flex items-center justify-center">
            <LucideSearch />
        </NuxtLink>

        <div v-if="citiesModalActive" 
             class="border-[1px] border-gray-300 shadow-md absolute bg-white top-[80px] left-0 p-6 rounded-[30px] space-y-4 z-10 divide-y-[1px]"
             ref="modalContainer"
        >
            <div v-if="filteredCities.length > 0" v-for="(city, i) in filteredCities" 
                 :key="city.id" 
                 :class="i !== 0 ? 'pt-4' : ''" 
                 class="flex items-center justify-start gap-2 cursor-pointer"
                 @click="selectCity(city)"
            >
                <LucideMapPin :size="30" :stroke-width="1" />
                <p class="text-lg">{{ city.name }}</p>
            </div>
            <p v-else>Digite a cidade que deseja hospedar-se!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { City } from '~/types/global';
import FilterDivider from './FilterDivider.vue';

const { cities } = useCitiesStore()

const citiesModalActive = ref(false);
const searchQuery = ref('');
const filteredCities = ref<City[]>([]);
const citiesInput = ref<HTMLInputElement | null>(null);
const inputContainer = ref<HTMLElement | null>(null);
const modalContainer = ref<HTMLElement | null>(null);
const selectedCityId = ref<number | null>(null)

function filterCities() {
    filteredCities.value = cities.filter(city => city.name.toLowerCase().includes(searchQuery.value.toLowerCase()) && searchQuery.value !== '');
};

function focusInput() {
    citiesInput.value?.focus();
};

const closeModalIfClickedOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (citiesModalActive.value &&
        !inputContainer.value?.contains(target) &&
        !modalContainer.value?.contains(target)) {
        citiesModalActive.value = false;
    }
};

function selectCity(city: City) {
    selectedCityId.value = city.id
    searchQuery.value = city.name
    citiesModalActive.value = false
    setTimeout(() => {
        citiesInput.value?.blur(); // Desfoca o campo de entrada
    }, 0);
}

const linkToSearch = computed(() => {
    let url = '/s'
    if(selectedCityId.value) {
        return url + '?cityId=' + selectedCityId.value
    }
    return url
})

onMounted(() => {
    document.addEventListener('click', closeModalIfClickedOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', closeModalIfClickedOutside);
});
</script>