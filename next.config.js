/** @type {import('next').NextConfig} */


const nextConfig = {
    experimental: { optimizeCss: true },
    
    logging: {
        fetches: {
          fullUrl: true,
        },
      },
    

}

module.exports = nextConfig
