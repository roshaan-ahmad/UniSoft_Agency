
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/services/seo",
        destination: "/services/seo-services",
        permanent: true,
      },
      {
        source: "/services/automation",
        destination: "/services/automation-solutions",
        permanent: true,
      },
      {
        source: "/school",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/tech",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
