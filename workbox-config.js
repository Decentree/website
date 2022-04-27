module.exports = {
    globDirectory: 'dist/',
    globPatterns: ['**/*.{json,js,css}'],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp|ico)$/,
        handler: 'CacheFirst',
  
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 15,
            maxAgeSeconds: 365000000,
          },
        },
      },
      {
        urlPattern: /\.(?:woff2|woff)$/,
        handler: 'CacheFirst',
  
        options: {
          cacheName: 'fonts',
          expiration: {
            maxEntries: 15,
            maxAgeSeconds: 365000000,
          },
        },
      },
    ],
    swDest: 'dist/sw.js',
    clientsClaim: true,
    skipWaiting: true,
  }