import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  /* config options here */
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /pdf\.worker\.min\.mjs$/,
  //     use: { loader: "file-loader", options: { name: "[name].[ext]" } },
  //   });
  //   return config;
  // },
};
// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
//   // Custom ESLint config
//   eslintConfig: {
//     rules: {
//       "@typescript-eslint/no-unused-vars": "off", // Disable globally (not recommended long-term)
//     },
//   },
// };
export default nextConfig;
