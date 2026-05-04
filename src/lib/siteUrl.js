const FALLBACK_SITE_URL = "https://kumegiken.co.jp";
const BASE_PATH_RAW = process.env.NEXT_PUBLIC_BASE_PATH || "";
const BASE_PATH = BASE_PATH_RAW ? `/${BASE_PATH_RAW.replace(/^\/+|\/+$/g, "")}` : "";

export function getSiteOrigin() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getBasePath() {
  return BASE_PATH;
}

function hasFileExtension(pathname) {
  return /\/[^/]+\.[a-zA-Z0-9]+$/.test(pathname);
}

function normalizePath(path, { addTrailingSlash = true } = {}) {
  const safePath = path.startsWith("/") ? path : `/${path}`;
  let normalizedPath = `${BASE_PATH}${safePath}`.replace(/\/{2,}/g, "/");
  const pathWithoutQuery = normalizedPath.split(/[?#]/)[0];

  if (addTrailingSlash && normalizedPath !== "/" && !normalizedPath.endsWith("/") && !hasFileExtension(pathWithoutQuery)) {
    normalizedPath = `${normalizedPath}/`;
  }

  if (!addTrailingSlash && normalizedPath.length > 1 && normalizedPath.endsWith("/")) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return normalizedPath;
}

export function toAbsoluteUrl(pathOrUrl, options) {
  if (!pathOrUrl) return null;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return new URL(normalizePath(pathOrUrl, options), getSiteOrigin()).toString();
}
