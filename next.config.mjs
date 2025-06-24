/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: "export",
  revalidate: false,
  poweredByHeader: false,
  basePath: process.env.NODE_ENV === "production" ? "/i-love-you" : "",
};
