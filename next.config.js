/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	// output: "export",
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		// experimental: {
		// 	serverComponents: true,
		// },
		unoptimized: true,
		remotePatterns: [
			// 	// {
			// 	//   protocol: 'https',
			// 	//   hostname: 'images.unsplash.com'
			// 	// },
		],
	},
};

module.exports = nextConfig;
