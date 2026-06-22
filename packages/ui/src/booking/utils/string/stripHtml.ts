export const stripHtml = (str: string, tags: string[], removeMode = "only") => {
  if (!str || str === "") return false;

  let output = str.toString();

  tags.forEach((tag) => {
    let pattern = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, "gis");
    output = output.replace(pattern, "");
  });

  return output;
};
