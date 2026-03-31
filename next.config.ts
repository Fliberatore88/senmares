import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.6.138"],
  devIndicators: false,
};

export default withNextIntl(nextConfig);
