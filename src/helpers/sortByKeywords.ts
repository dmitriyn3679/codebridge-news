import {Article} from "../types/Article";

export const sortByKeywords = (articles: Article[], keywords: string[]) => {
  return articles.sort((a1, a2) => {
    let firstArticleOrder = 0;
    let secondArticleOrder = 0;
    
    for (const word of keywords) {
      if (a1.title.toLowerCase().includes(word)) {
        firstArticleOrder += 1;
      }
  
      if (a1.summary.toLowerCase().includes(word)) {
        firstArticleOrder += 0.5;
      }
      
      if (a2.title.toLowerCase().includes(word)) {
        secondArticleOrder += 1;
      }
  
      if (a2.summary.toLowerCase().includes(word)) {
        secondArticleOrder += 0.5;
      }
    }
    return secondArticleOrder - firstArticleOrder;
  });
};