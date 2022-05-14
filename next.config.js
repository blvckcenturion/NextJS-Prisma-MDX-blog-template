/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai', 
    path: ''
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => { 
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime'),
    }
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          child_process: false,
          fs: false,
          'builtin-modules': false,
          worker_threads: false
        }
      }
    }

    return config
  }
}
