/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about_me",
        permanent: true,
      },
      {
        source: "/blog/my-immigration-story",
        destination: "/blog-v2/7ed72d4dedd4274f021387db",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
