/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: "custom",
	},
	basePath: isProd ? "/test-static-site" : "",
	assetPath: isProd ? "/test-static-site" : "",
};

module.exports = nextConfig;
