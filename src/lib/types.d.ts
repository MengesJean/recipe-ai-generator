type Ingredient = string;

export type Recipe = {
    id?: string;
    title: string;
    ingredients: Ingredient[];
    steps: string[];
    quantity: string;
    for: string;
    preparation_time: string;
    cooking_time: string;
}
