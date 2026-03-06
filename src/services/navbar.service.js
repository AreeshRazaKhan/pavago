const BASE_URL = "https://api.prismolix.com/?rest_route=";

/**
 * Helper function to decode HTML entities from WordPress strings
 */
const decodeHTML = (str) => {
  if (!str) return "";
  return str.replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
};

/**
 * Fetches and organizes WordPress data for the Mega Menu.
 * Returns an array of categories, each containing its associated sub-services.
 */
export const getMegaMenuData = async () => {
  try {
    // 1. Fetch all Categories (Service Groups) from WordPress
    const catRes = await fetch(`${BASE_URL}/wp/v2/service_groups&per_page=100`, {
      next: { revalidate: 3600 },
    });
    const categories = await catRes.json();

    // 2. Fetch all Sub-Services (Posts) from WordPress
    const serviceRes = await fetch(`${BASE_URL}/wp/v2/services&per_page=100`, {
      next: { revalidate: 3600 },
    });
    const allServices = await serviceRes.json();

    // 3. Map the data with Decoding
    const structuredMenu = categories.map((cat) => ({
      // Decode the Category Name (e.g., IT &amp; Engineering -> IT & Engineering)
      label: decodeHTML(cat.name),
      slug: cat.slug,
      links: allServices
        .filter((service) => service.service_groups.includes(cat.id))
        .map((s) => ({
          // Decode the Sub-Service Name
          name: decodeHTML(s.title.rendered),
          slug: s.slug,
        })),
    }));

    return structuredMenu;
  } catch (error) {
    console.error("Error fetching Mega Menu data:", error);
    return [];
  }
};