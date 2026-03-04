const BASE_URL = "https://prismolix-tahaateebkhanzada3.wasmer.app/?rest_route=";

/**
 * Fetches and organizes WordPress data for the Mega Menu.
 * Returns an array of categories, each containing its associated sub-services.
 */
export const getMegaMenuData = async () => {
  try {
    // 1. Fetch all Categories (Service Groups) from WordPress
    // We use per_page=100 to ensure we get all groups in one call
    const catRes = await fetch(`${BASE_URL}/wp/v2/service_groups&per_page=100`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    const categories = await catRes.json();

    // 2. Fetch all Sub-Services (Posts) from WordPress
    const serviceRes = await fetch(`${BASE_URL}/wp/v2/services&per_page=100`, {
      next: { revalidate: 3600 },
    });
    const allServices = await serviceRes.json();

    // 3. Map the data: Group each sub-service under its parent Category ID
    const structuredMenu = categories.map((cat) => ({
      label: cat.name,
      slug: cat.slug,
      links: allServices
        .filter((service) => service.service_groups.includes(cat.id))
        .map((s) => ({
          name: s.title.rendered,
          slug: s.slug,
        })),
    }));

    return structuredMenu;
  } catch (error) {
    console.error("Error fetching Mega Menu data:", error);
    return []; // Return empty array on failure to prevent app crash
  }
};