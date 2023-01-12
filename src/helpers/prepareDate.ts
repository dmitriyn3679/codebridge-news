export const prepareDate = (date: string) => {
  const d = new Date(date.slice(0, 10))
  const [month, dayNum, year] = d.toDateString().split(' ').slice(1);

  return `${month} ${dayNum}th, ${year}`;
};