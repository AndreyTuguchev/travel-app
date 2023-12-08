/** @type {import('next').NextConfig} */


const nextConfig = {
    experimental: { optimizeCss: true },
    logging: {
        fetches: {
          fullUrl: true,
        },
      },
    // webpack: (config, options) => {
    //     config.module.rules.push({
    //         test: /\.css$/i,
    //         use: [
    //         {
    //             loader: "style-loader",
    //             options: { injectType: "singletonStyleTag" },
    //         },
    //         "css-loader",
    //         ],
    //     })
     
    //     return config
    //   },

}

module.exports = nextConfig
