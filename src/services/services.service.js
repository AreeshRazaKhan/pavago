const BASE_URL = "https://prismolix-tahaateebkhanzada3.wasmer.app/?rest_route=";

// 1. Fetch Main Service (Taxonomy/Category) Details
export const getServiceCategory = async (slug) => {
  const res = await fetch(`${BASE_URL}/wp/v2/service_groups&slug=${slug}`, {
    next: { revalidate: 3600 }, // 1 ghante baad cache refresh hoga
  });
  const data = await res.json();
  return data[0]; // Slug unique hota hai isliye pehla item return karenge
};

// 2. Fetch All Sub-Services for a specific Category ID
export const getSubServicesByCategoryId = async (categoryId) => {
  const res = await fetch(`${BASE_URL}/wp/v2/services&service_groups=${categoryId}`, {
    next: { revalidate: 3600 },
  });
  return await res.json();
};

// 3. Fetch Single Sub-Service Detail (for the final page)
export const getSingleSubService = async (slug) => {
  const res = await fetch(`${BASE_URL}/wp/v2/services&slug=${slug}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data[0];
};