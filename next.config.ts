import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api-backend/:path*",
        destination: "http://biiliiBackend.eba-phvqmhxm.eu-north-1.elasticbeanstalk.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;