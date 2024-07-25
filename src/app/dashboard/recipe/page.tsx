"use client"
import { createRecipe, getRecipeFromGPT } from '@/actions/recipe.action';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import {FormEvent, useRef, useState } from 'react'
import { Recipe, Ingredient } from '@/lib/types.d';
import { useRouter } from 'next/navigation';
import RecipeTemplate from '@/components/RecipeTemplate';

const Page = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const ingredient = useRef<HTMLInputElement>(null)
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();    
        if(!ingredient?.current) return;
        setIngredients([...ingredients, ingredient.current.value])
        ingredient.current.value = ''
    }

    const handleDelete = (ingredient: Ingredient) => {
        setIngredients(ingredients.filter(i => i !== ingredient))
    }

    const handleGPT = async () => {
        if(ingredients.length === 0) return;
        setLoading(true);
        const response = await getRecipeFromGPT(ingredients);
        if (response) {
            setRecipe(response);
            setLoading(false);
        }
    }

    const handleSave = async () => {
        console.log(recipe)
        const save = await createRecipe(recipe as Recipe)
        if(save) {
            console.log('Recipe saved')
            router.push('/dashboard')
            router.refresh();
        }
    }
    return (
        <>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                    <input type="text" placeholder="Title" ref={ingredient} className="w-full p-4 border border-gray-300 rounded" />
                </div>
            </form>
            <ul className='p-4 space-y-4 border border-black my-4'>
                {ingredients.map((ingredient, index) => (
                    <li key={index} className='p-4 bg-white flex justify-between items-center'>
                        {ingredient} <button className="bg-red-500 text-white hover:bg-red-600 transition rounded px-4 py-2" onClick={() => handleDelete(ingredient)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                {loading ? "loading" : <button className="bg-blue-500 text-white hover:bg-blue-600 transition rounded px-4 py-2" onClick={handleGPT}>Call GPT</button>}
            </div>
            {recipe && (
                <div className='space-y-6 mt-12'>
                    <RecipeTemplate recipe={recipe} />
                    <Button onClick={handleSave}>Save this recipe</Button>
                </div>
            )}
        </>
    )
}

export default Page