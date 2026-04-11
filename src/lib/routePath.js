const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function routePath(path) {
  return `${basePath}${path}`;
}
