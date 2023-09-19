// next.config.js
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      
      {
        test: /\.(mp4|webm)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/videos/', // Adjust the output path as needed
              name: '[name].[ext]',
            },
          },
        ],
      }
    );
    
    return config;
  },
};