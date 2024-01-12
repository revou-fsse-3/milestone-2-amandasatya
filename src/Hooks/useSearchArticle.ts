import axios from "axios";

export const SearchArticle = async (query: string) => {
  try {
    if (!query || query.trim() === "") {
      return [];
    }

    const response = await axios.get(
      `https://newsapi.org/v2/everything?language=en&q=${query}&apiKey=ee26a25870b74596acec352dab18a49d`
    );
    console.log("Response:", response);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
