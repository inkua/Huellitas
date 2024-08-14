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
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/huellitasctgna.appspot.com/o/**',
        },
      ],  
    },
};

export default nextConfig;
