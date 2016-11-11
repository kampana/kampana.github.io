const webpack = require('webpack');
module.exports = {
  entry: './reactSite.js',
  output: { filename: './minifiedReactSite.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
    
  },
  plugins: [
//  new webpack.DefinePlugin({
//      'process.env':{
//        'NODE_ENV': JSON.stringify('production')
//      }
//    })
//    new webpack.optimize.UglifyJsPlugin({
//      compress:{
//        warnings: true
//      }
//    })
  ]
};