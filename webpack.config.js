// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/js/main.js', // Path to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output file name
  },
  // Other webpack configurations...
};
