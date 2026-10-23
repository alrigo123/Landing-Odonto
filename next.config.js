/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // CVE-2026-96889: RCE in the image optimizer, no fix for Next 14. Remove after upgrading to >= 15.5.28.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
