const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";
const reactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  plugins: [
    isDevelopment && new reactRefreshWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    hot: true,
  },
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [isDevelopment && require("react-refresh/babel")].filter(
              Boolean
            ),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
