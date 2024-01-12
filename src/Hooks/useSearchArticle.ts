import axios from "axios";

export const SearchArticle = async (query: string) => {
  try {
    if (!query || query.trim() === "") {
      return [];
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?language=en&q=${query}&apiKey=7cdcc677bfb94f5ebd98ef68029fb083`
    );
    console.log("Response:", response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
