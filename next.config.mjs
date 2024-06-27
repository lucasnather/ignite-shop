import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "files.stripe.com"
        }]
    }
};

export default nextConfig;
