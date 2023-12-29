const TerserPlugin = require('terser-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'none',
  optimization: {
    innerGraph:true,
    sideEffects: true,
    moduleIds: 'named'
  },
};
