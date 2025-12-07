export default (name: string = "Unknown") => {
  name = name.toLowerCase();
  name = name.replace(/\s+/g, "-");
  return "@" + name;
};
