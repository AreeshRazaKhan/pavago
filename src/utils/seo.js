import { cleanSEOData } from "@/helpers/cleanUrl";

export const extractCategorySlug = (data) => {
  const categoryClass = data?.class_list?.find((c) =>
    c.startsWith("service_groups-")
  );
  return categoryClass ? categoryClass.replace("service_groups-", "") : "";
};

export const formatMetadata = (data) => {
  if (!data?.yoast_head_json) return null;

  const categorySlug = extractCategorySlug(data);
  const cleanJson = cleanSEOData(data.yoast_head_json, categorySlug);

  return {
    title: cleanJson.title,
    description: cleanJson.description,
    alternates: {
      canonical: cleanJson.canonical,
    },
    openGraph: {
      title: cleanJson.og_title,
      description: cleanJson.og_description,
      url: cleanJson.og_url,
      siteName: cleanJson.og_site_name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: cleanJson.twitter_title,
      description: cleanJson.twitter_description,
    },
  };
};

// Function to format Schema for Script tag
export const formatSchema = (data) => {
  if (!data?.yoast_head_json?.schema) return null;

  const categorySlug = extractCategorySlug(data);
  return cleanSEOData(data.yoast_head_json.schema, categorySlug);
};