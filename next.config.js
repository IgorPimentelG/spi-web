/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {

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
