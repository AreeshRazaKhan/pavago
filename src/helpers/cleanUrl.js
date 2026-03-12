/**
 * Replace API URLs with Main Frontend URLs for SEO consistency
 */
export const cleanSEOData = (data, categorySlug = "") => {
  if (!data) return "";

  const apiURL = "https://api.prismolix.com";
  const mainURL = "https://prismolix.com";

  let jsonString = typeof data === "string" ? data : JSON.stringify(data);

  jsonString = jsonString.split(apiURL).join(mainURL);

  if (categorySlug) {
    jsonString = jsonString.split("/services/").join(`/${categorySlug}/`);
  }

  return typeof data === "string" ? jsonString : JSON.parse(jsonString);
};