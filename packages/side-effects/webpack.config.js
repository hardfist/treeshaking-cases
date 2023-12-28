const TerserPlugin = require('terser-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  optimization: {
    minimize: true,
    sideEffects: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            wrap_iife:false,beautify:true
          },
          mangle:false
        }
      }),
    ],
  },
};
