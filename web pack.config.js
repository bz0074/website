// webpack.config.js

const path = require('path');

module.exports = {
  // Other webpack configuration options...

  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src') // Adjust the path if necessary
    }
  }
};
