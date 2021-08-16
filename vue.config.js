module.exports = {
  devServer: {
    port: '8888'
  },
  configureWebpack: (config) => {
    config.module.rules.push(
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-pretty-logger'
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'vue-pretty-logger/lib/in-js'
      //     }
      //   ]
      // }
    )
  }
}