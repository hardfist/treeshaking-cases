const TerserPlugin = require('terser-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  optimization: {
    sideEffects: true,
    moduleIds: 'named'
  },
  experiments: {
    css: true
  },
  stats: {
    optimizationBailout: true
  }
};
