export const sliceDescription = (description: string, maxChars: number) => {
  if (description.length < maxChars) {
    return description;
  }

  return `${description.slice(0, maxChars)}...`;
};