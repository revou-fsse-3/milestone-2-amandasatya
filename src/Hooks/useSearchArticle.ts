import axios from "axios";

export const SearchArticle = async (query: string) => {
  try {
    if (!query || query.trim() === "") {
      return [];
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?language=en&q=${query}&apiKey=07b4f57da98a483daa4ded0da1cdffe5`
    );
    console.log("Response:", response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
