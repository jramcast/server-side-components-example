const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Check Environment
const environment = process.env.NODE_ENV || 'production';

console.log(' ----- Build for environment: **** ' + environment + ' **** -----');


// Webpack Plugins;
// Create chunks
const plugins = [
  // Create a css file per each initial chunk
  new ExtractTextPlugin('[name].css'),
  new webpack.NoErrorsPlugin()
];

// Plugins are different depending on the environment
if (environment === 'dev') {
  // In dev, activate the hot reload
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      BROWSER: true,
      NODE_ENV: JSON.stringify(environment)
    }
  }));
} else {
  // uglify and compress code
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));

  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  plugins.push(new webpack.DefinePlugin({
    // removes a lot of debugging code in React
    'process.env': {
      BROWSER: true,
      NODE_ENV: JSON.stringify('production')
    }
  }));
}


const devServerConfig = {
  contentBase: './public',
  inline: true
};

// Put all the config together
const webpackConfig = {

  // Webpack entry point scripts (those scripts explicitly included in the html):
  // Relative to context path
  entry: {
    home: ['./data/config.js']
  },

  // Webpack output config
  output: {
    // An absolute path to the desired output directory.
    path: './public/',

    // A filename pattern for the output files
    filename: '[name].js',

    // A filename pattern for generated chunks.
    chunkFilename: '[name].chunk.js'
  },

  // Module loeaders
  module: {
    loaders: [
      // Compile to ES5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },

      // extract less files
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      // Fonts: the url-loader uses DataUrls.
      
      { 
        test: /\.woff(2)?(.*)$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },

      // Fpnts: the file-loader emits files.
      { 
        test: /\.(ttf|eot|svg)(.*)$/, 
        loader: "file-loader" 
      }
    ]
  },
  plugins,
  devServer: devServerConfig,
  devtool: 'source-map'
};

module.exports = webpackConfig;
