const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry : [
      "./index.js"      
  ],
  output : {
    path:"",
    filename : "bundle.js",
  },
  devServer:  {
    hot: true,
    inline : true,
    port : 3333 ,
    historyApiFallback: true,
  },
  externals: {
    "cheerio": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : ["babel"],
        query: {
          presets: ["es2015", "stage-0"],
        },
      },
      {
        //test: /\.(scss|css)$/,
        //loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap"),
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass') 
      },
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, "./Style")]
    }
  },
  watch: true,
  postcss: [autoprefixer],
  plugins: [
        new ExtractTextPlugin("Style/bundle.css"),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("development"),
          VERSION: JSON.stringify(pkg.version)
        }),        
  ]
}
