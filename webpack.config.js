const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')  

module.exports = { 
    entry: './src/index.js',
    output: { 
        path: path.join(__dirname, '/dist'), 
        filename: 'index_bundle.js'
    },
    module: {  
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      sourceMap: true,
                    },
                  },
                ],
              },
            {
                test: /\.(png|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' 
        }),
    ],
    devServer: {
      port: 8000,
      hot: true,
      contentBase: './dist',
      proxy: {
        'http://localhost:8000': 'http://localhost',
      },
    },
}