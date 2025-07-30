/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['zod'],
    nextScriptWorkers: true,
  }
};

export default nextConfig;
