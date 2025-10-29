/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Improve RSC handling
    serverComponentsExternalPackages: [],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Fix webpack hot-update issues in development
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
      
      // Improve hot module replacement
      config.optimization = {
        ...config.optimization,
        moduleIds: 'named',
      };
      
      // Fix RSC routing issues
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
}

export default nextConfig
