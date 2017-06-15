const path = require('path')
const webpack = require('webpack')



module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve('src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        // Don't use .babelrc in `yarn link`-ed dependency's directory and use in current direction instead
        //loader: 'babel-loader?babelrc=false&extends=' + path.resolve(__dirname, '.babelrc')
        use: [{
            loader: 'babel-loader',
            options: {
                babelrc: false, // Tells webpack not to use the .babelrc file
                presets: [
                    ['babel-preset-env', { 
                        "targets": { "firefox": 52, "chrome": 55 },
                        "modules": false,
                        "loose": true
                    }],
                    'react' // Transform JSX into React.createElement calls
                ]
            }
        }]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },
}
