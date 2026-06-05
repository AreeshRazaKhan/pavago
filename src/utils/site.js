export const SITE_URL = "https://www.prismolix.com";

export const getCanonicalUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath =
    normalizedPath === "/" ? normalizedPath : normalizedPath.replace(/\/$/, "");

  return `${SITE_URL}${cleanPath}`;
};
