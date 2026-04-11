/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_PAGES === 'true';
const repoName = 'kumegiken';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPagesBuild
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

module.exports = nextConfig
