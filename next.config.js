/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true';
const useBasePath = process.env.GITHUB_PAGES_USE_BASE_PATH !== 'false';
const repoName = 'kumegiken';
const basePath = isGithubPagesBuild && useBasePath ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

module.exports = nextConfig
