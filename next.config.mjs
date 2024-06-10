// next.config.js

const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dorljfo6v/**',
        },
      ],  
    },
};

export default nextConfig;
