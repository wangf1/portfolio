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
    ];
  },
};

export default nextConfig;
