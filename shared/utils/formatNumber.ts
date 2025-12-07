export default (num: any) => {
  if (typeof num !== "number") return 0;
  return num.toLocaleString("en-US");
};
