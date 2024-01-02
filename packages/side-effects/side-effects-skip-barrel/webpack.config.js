const TerserPlugin = require('terser-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  optimization: {
    minimize: true,
    sideEffects: true,
    moduleIds: 'named',
    chunkIds: 'named',
    
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
