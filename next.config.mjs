/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	//allow cloudinary res.cloudinary.com
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
}

export default nextConfig
