/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: "export",
  cleanDistDir: true,
  poweredByHeader: false,
  turbopack: {
    root: true
  },
  basePath: process.env.NODE_ENV === "production" ? "/i-love-you" : ""
};
