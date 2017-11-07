const path = require("path");

module.exports = {
  // sets the location where babel runs so you don't have to be in the root directory to run
  context: __dirname,
  entry: "./js/ClientApp.jsx",
  // don't want errors to show up on the bundled code but the source code
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  devServer: {
    publicPath: "/public/",
    //client worries about routing...allowing browserrouter to work!
    // 404s will fallback to /index.html
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        // anything that ends in .js or .jsx, run through babel
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|JPG|gif)$/,
        loader: "file-loader"
      }
    ]
  }
};
