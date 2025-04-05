import axios from "axios";

const API_KEY = "0c6acbbb75aa4e92b6b9f6abd33c2983";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchPopularRecipes = async () => {
  const cached = localStorage.getItem("popular");
  if (cached) return JSON.parse(cached);

  const { data } = await axios.get(`${BASE_URL}/random`, {
    params: {
      number: 10,
      tags: "vegetarian",
      apiKey: API_KEY,
    },
  });

  localStorage.setItem("popular", JSON.stringify(data.recipes));
  return data.recipes;
};

export const searchRecipes = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/complexSearch`, {
    params: { query, apiKey: API_KEY },
  });
  return data.results;
};

export const getRecipeDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}/information`, {
    params: { apiKey: API_KEY },
  });
  return data;
};
