const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),  // 打包出口，即打包后的文件会放在这个目录下
    filename: '[name].[hash:8].js',   // 打包后的文件名
    publicPath: '/', 	// 静态资源相对路径
  },
  module:{
    rules: [
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        use:{
          loader: 'babel-loader',
          options:{
            // presets:['babel-preset-env', 'babel-preset-react']
            presets:['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins:[new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html', // 模板
  })],
	devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9000,   // 指定服务启动在 9000 端口
		inline: true,  // inline 模式启动
		open: true  // 执行webpack-dev-server 后自动打开浏览器
  }
};
