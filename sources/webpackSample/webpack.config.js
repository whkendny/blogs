/*
  注意: “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

*/
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',

  devServer:{
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    port: "8080",
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },

  module: {
    rules : [
      {
        test: /(\.jsx|\.js)$/,
        use:{
          loader: "babel-loader",
          // 将下面的配置移至 .babelrc
          // options:{ //通过options给Babel传递选项
          //   presets: [
          //     "env", "react"
          //   ]
          // }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: "style-loader"
          },{
            loader: "css-loader",
            options:{
              modules: true, // 指定启用css modules
              localIndentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          }
        ]
      }
    ]
  }
}
