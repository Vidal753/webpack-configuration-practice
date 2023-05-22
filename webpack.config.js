const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
  *for use a jsx we have to configure the loader babel
  *to convert this jsx to js
  */
const rulesForJavaScript = {
  test: /\.js$/, //regex to find all js files,
  loader: 'babel-loader', //babel loader convert the code to js
  options: {
    //we have to specify the presets that we want to use
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  },
};

const rulesForCss = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rules = [rulesForJavaScript, rulesForCss];

module.exports = {
  //we this code we can change the name of the output file
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    rules,
  },
  //here we can configure the dev server
  devServer: {
    open: true, //open the browser
    port: 3000, //port to use
  }
};
