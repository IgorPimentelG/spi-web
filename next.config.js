/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	compiler: {
		styledComponents: true
	},

	redirects() {
		return [
			{
				source: "/",
				destination: "/sign-in",
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
