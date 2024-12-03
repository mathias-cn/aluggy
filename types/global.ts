// Definindo o tipo para a cidade
export interface City {
    id: number;
    name: string;
}

// Definindo o tipo para lugares (places)
export interface Place {
    id: number;
    title: string;
    city: City;
    imgUrl: string;
    regularPrice: number;
    discountedPrice: number | null;
    rating: {
        value: number; // De 1 a 5
        qty: number;   // Quantidade de ratings
    };
}