/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backoffice.fabdev.fr',
            },
        ],
        unoptimized: true,
    },
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;
