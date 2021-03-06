module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      { test: /\.jpe?g$|\.svg$|\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }  
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

