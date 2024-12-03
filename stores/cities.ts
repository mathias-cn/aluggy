import { defineStore } from 'pinia'

export const useCitiesStore = defineStore('cities', {
    state: () => {
        return {
            cities: [
                { id: 1, name: 'São Sebastião' },
                { id: 2, name: 'Caraguatatuba' },
                { id: 3, name: 'Ubatuba' },
                { id: 4, name: 'Ilhabela' },
                { id: 5, name: 'Bertioga' },
                { id: 6, name: 'Guarujá' },
            ]
        }
    }
})
