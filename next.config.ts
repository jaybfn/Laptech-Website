import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/solutions/biometrics-vdp",
        destination: "/solutions/biometrics-access-control",
        permanent: true,
      },
      {
        source: "/solutions/intercom-audio",
        destination: "/solutions/commercial-audio-pa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
