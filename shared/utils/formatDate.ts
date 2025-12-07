export default (date: string | Date) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
