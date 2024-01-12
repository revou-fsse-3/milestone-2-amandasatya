import axios from "axios";

export const SearchArticle = async (query: string) => {
  try {
    if (!query || query.trim() === "") {
      return [];
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?language=en&q=${query}&apiKey=8d1f622b778e4d8d91422a5c6c856f4f`
    );
    console.log("Response:", response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
