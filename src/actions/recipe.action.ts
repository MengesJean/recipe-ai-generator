"use server";

import { db } from "@/lib/firebase";
import openai from "@/lib/openai";
import { Recipe } from "@/lib/types";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { uid } from "uid";

export const getRecipeFromGPT = async (ingredients: string[]) => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-1106",
        response_format: { "type": "json_object" },
        messages: [
            {"role": "system", "content": "You are a recipe bot."},
            {"role": "system", "content": "Create a recipe using the user ingredients"},
            {"role": "system", "content": "You will use french language to create a recipe."},
            {"role": "system", "content": "I need the ingredients and the steps to create it. I need at least 5 steps. I need the steps to be clear and concise. I need the steps to be in order. I need you to define the quantity and for how much person the recipe is for. I already want an estimate of the time it will take to prepare the recipe (preparation and cooking)."},
            {"role": "system", "content": "You will return a json object with the following keys: title, ingredients, steps, for (only number), preparation_time, cooking_time."},
            {"role": "user", "content": ingredients.join(", ")}
        ],
    }) as any;

    return JSON.parse(response.choices[0].message.content);
}

export const createRecipe = async (recipe: Recipe) => {
    try {
        const uuid = uid();
        await setDoc(doc(db, "recipes", uuid), recipe);
        return true;
    } catch(error) {
        console.error(error);
    }
}

export const getRecipes = async () => {
    const query = await getDocs(collection(db, "recipes"));
    const recipes: Recipe[] = query.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        } as Recipe;
    });
    return recipes;
}

export const getRecipe = async (id: string) => {
    const query = await getDoc(doc(db, "recipes", id));
    return query.data() as Recipe;
}