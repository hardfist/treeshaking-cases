const TerserPlugin = require('terser-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  optimization: {
    minimize: false,
    moduleIds: 'named',
    usedExports:true,
    sideEffects:true,
    providedExports:true,
    innerGraph:false
  },
  stats: {
    optimizationBailout: true,
  },
};
