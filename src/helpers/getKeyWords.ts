export const getKeyWords = (query: string) => {
  return query.toLowerCase().split(' ').filter(w => w);
};