import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /pdf\.worker\.min\.mjs$/,
  //     use: { loader: "file-loader", options: { name: "[name].[ext]" } },
  //   });
  //   return config;
  // },
};

export default nextConfig;
