import {client} from "../utils/fetchClient";
import {Article} from "../types/Article";

export const getArticles = (count: number) => {
  return client.get<Article[]>(`?_limit=${count}`);
};