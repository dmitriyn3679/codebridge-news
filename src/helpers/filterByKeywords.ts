import {Article} from "../types/Article";
import {compareArticle} from "./compareArticle";

export const filterByKeywords = (articles: Article[], keywords: string[]) => {
  return articles.filter(article => compareArticle(article.title, keywords)
    || compareArticle(article.summary, keywords));
};