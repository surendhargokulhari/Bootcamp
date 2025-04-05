import React, { useEffect, useState } from "react";
import { fetchPopularRecipes } from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchPopularRecipes().then(setRecipes);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="rounded overflow-hidden shadow-md hover:scale-105 transition">
            <img src={recipe.image} alt={recipe.title} className="w-full" />
            <h2 className="text-center p-2 font-semibold">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
