import axios from "axios";

export const SearchArticle = async (query: string) => {
  try {
    if (!query || query.trim() === "") {
      return [];
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?language=en&q=${query}&apiKey=733a25b58ad641ab80e662838427ccb5`
    );
    console.log("Response:", response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
