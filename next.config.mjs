
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
      source:      "/search",
      destination: "/",
      permanent:   true,
    },
    ];
  },
};

export default nextConfig;
