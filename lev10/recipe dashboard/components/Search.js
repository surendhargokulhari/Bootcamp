import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { searchRecipes } from "../api";

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchRecipes(query).then(setResults);
  }, [query]);

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-4 d-flex justify-content-center align-items-center ">Results for "{query}"</h2>
      <div className="py-5 my-auto text-center">
        {results.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
