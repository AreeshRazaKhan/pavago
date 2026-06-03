import { getCanonicalUrl } from "@/utils/site";

export const revalidate = 3600;

const BASE_URL = "https://api.prismolix.com/?rest_route=";

console.log(BASE_URL)

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/privacy-policy", priority: 0.4 },
  { path: "/terms-%26-conditions", priority: 0.4 },
];

const createSitemapEntry = ({ path, priority, changeFrequency = "weekly" }) => ({
  url: getCanonicalUrl(path),
  lastModified: new Date(),
  changeFrequency,
  priority,
});

const fetchJson = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap data: ${response.status}`);
  }

  return response.json();
};

const getDynamicServiceRoutes = async () => {
  const [categories, services] = await Promise.all([
    fetchJson("/wp/v2/service_groups&per_page=100"),
    fetchJson("/wp/v2/services&per_page=100"),
  ]);

  if (!Array.isArray(categories) || !Array.isArray(services)) {
    throw new Error("Unexpected sitemap data format");
  }

  const categorySlugsById = new Map(
    categories.map((category) => [category.id, category.slug])
  );

  const categoryRoutes = categories.map((category) => ({
    path: `/${category.slug}`,
    priority: 0.8,
  }));

  const serviceRoutes = services.flatMap((service) =>
    (service.service_groups || [])
      .map((categoryId) => categorySlugsById.get(categoryId))
      .filter(Boolean)
      .map((categorySlug) => ({
        path: `/${categorySlug}/${service.slug}`,
        priority: 0.7,
      }))
  );

  return [...categoryRoutes, ...serviceRoutes];
};

export default async function sitemap() {
  let routes = staticRoutes;

  try {
    const dynamicRoutes = await getDynamicServiceRoutes();
    routes = [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error(error);
  }

  const uniqueRoutes = Array.from(
    new Map(routes.map((route) => [route.path, route])).values()
  );

  return uniqueRoutes.map(createSitemapEntry);
}
