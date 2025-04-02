import React from "react";
import { useParams } from "react-router-dom";

// Sample Recipe Data for Detail Page (you can use the same `recipeData`)
const recipeData = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    imageUrl: "https://cdn.pixabay.com/photo/2018/11/10/00/38/pasta-3805772_1280.jpg",
    ingredients: ["spaghetti", "eggs", "bacon", "parmesan"],
    instructions: "Boil the spaghetti, cook bacon, mix everything together with eggs.",
  },
  {
    id: 2,
    title: "Chicken Curry",
    imageUrl: "https://cdn.pixabay.com/photo/2016/07/22/05/07/delicious-1534207_1280.jpg",
    ingredients: ["chicken", "curry powder", "onions", "coconut milk"],
    instructions: "Cook the chicken, add curry powder and coconut milk, simmer.",
  },
  {
    id: 3,
    title: "Grilled Cheese Sandwich",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/04/00/bread-1867208_1280.jpg",
    ingredients: ["bread", "cheese", "butter"],
    instructions: "Butter the bread, add cheese, and grill.",
  },
];

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipeData.find((r) => r.id.toString() === id);

  return (
    <div>
      <h1>{recipe?.title}</h1>
      <img src={recipe?.imageUrl} alt={recipe?.title} className="w-50" />
      <h3>Ingredients:</h3>
      <ul>
        {recipe?.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe?.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
