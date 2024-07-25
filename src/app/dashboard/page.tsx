import { getRecipes } from "@/actions/recipe.action";
import Typography from "../../components/ui/Typography";
import Link from "next/link";
import Button from "@/components/ui/Button";

const Page = async () => {
  const recipes = await getRecipes();
  return (
    <div>
      <Typography variant="h1">Dashboard</Typography>
      <Button className="my-4">
        <Link href="/dashboard/recipe">
          Create Recipe
        </Link>
      </Button>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white p-4 shadow border-2 border-white rounded hover:border-indigo-500 transition">
            <Link href={`/dashboard/recipe/${recipe.id}`}>
              <Typography variant="h3" className="mb-2">
                {recipe.title}
              </Typography>
              <Typography variant="body">
                Preparation: {recipe.preparation_time}
              </Typography>
              <Typography variant="body">
                Cook: {recipe.cooking_time}
              </Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
