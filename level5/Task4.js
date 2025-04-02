import React, { useState } from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

// Sample Recipe Data
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

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Recipes based on the search term
  const filteredRecipes = recipeData.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <Router>
      <div>
        <h1>Recipe Finder</h1>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Update React Router v6 with Routes */}
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
