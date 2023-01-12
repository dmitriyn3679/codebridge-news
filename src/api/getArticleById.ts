import {client} from "../utils/fetchClient";
import {Article} from "../types/Article";

export const getArticleById = (id: string) => {
  return client.get<Article>(`/${id}`)
};