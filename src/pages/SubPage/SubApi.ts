import axios from "axios";
export interface SubApiProps {
  id: string;
  title: string;
  urlToImage: string;
  description: string;
  content: string;
  url: string;
}

export const SubApi = async (query: string) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?category=${query}&apiKey=197e50906d1148ae9f89e4e3b7178ef5`
    );
    console.log(response);
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
};
