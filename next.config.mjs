/** @type {import('next').NextConfig} */
import path from 'path';


const nextConfig = {
    webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': path.resolve('./node_modules/three')
    }
    return config
  }
};

export default nextConfig;
