import { getRecipe } from '@/actions/recipe.action';
import RecipeTemplate from '@/components/RecipeTemplate';
import Typography from '@/components/ui/Typography';

const Page = async ({params: {id}}: {params: {id: string}}) => {
    const recipe = await getRecipe(id);
  return (
    <RecipeTemplate recipe={recipe} />
  )
}

export default Page