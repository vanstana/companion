const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const DEBUG = false

module.exports = {
  mode: DEBUG ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/i,
        use: ['ts-loader'],
        include: /src/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.ts', '.tsx', '.css']
  },
  externals: (context, request, callback) =>
    /^\.{1,2}\//.test(request) ? callback() : callback(null, 'commonjs ' + request),
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    DEBUG ? new BundleAnalyzerPlugin() : { apply: () => {} }
  ]
}
