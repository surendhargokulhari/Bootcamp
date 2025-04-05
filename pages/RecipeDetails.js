import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeDetails(id).then(setRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mb-4" />
      <h3 className="font-bold mt-4">Ingredients:</h3>
      <ul className="list-disc ml-6">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="font-bold">Instructions:</h3>
        <p dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </div>
    </div>
  );
};

export default RecipeDetails;
