import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.title} className="w-50" />
      <h2>{recipe.title}</h2>
      <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
    </div>
  );
};

export default RecipeCard;
