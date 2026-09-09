import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/folio/:path*",
        destination: "/tentang-kami",
        permanent: true,
      },
      {
        source: "/kantor-cabang/surabaya",
        destination: "/kantor-cabang/sidoarjo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
