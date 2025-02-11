/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
        formats:['image/webp']

    },
};

export default nextConfig;
