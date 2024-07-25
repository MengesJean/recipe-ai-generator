import { Recipe } from "@/lib/types";
import Typography from "@/components/ui/Typography";

const RecipeTemplate = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="space-y-6 mt-12">
      <Typography variant="h2">{recipe.title}</Typography>
      <div>
        <Typography variant="body">Pour: {recipe.for} personnes</Typography>
        <Typography variant="body">
          Temps de cuisson : {recipe.cooking_time}
        </Typography>
        <Typography variant="body">
          Temps de préparation : {recipe.preparation_time}
        </Typography>
      </div>
      <div>
        <Typography variant="h3" className="mb-3">
          Ingredients
        </Typography>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <Typography variant="h3" className="mb-3">
          Étapes
        </Typography>
        <ul className="list-disc list-inside">
          {recipe.steps.map((step: string, index: number) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeTemplate;
