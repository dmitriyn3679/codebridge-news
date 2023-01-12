export const compareArticle = (text: string, keywords: string[]) => {
  for (const word of keywords) {
    if (text.toLowerCase().includes(word)) {
      return true;
    }
  }
  
  return false;
  
};