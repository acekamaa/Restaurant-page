import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { watchFile } from 'fs';
import { type } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/scripts/index.js',

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    mode: isProduction ? 'production' : 'development',

    devtool: isProduction ? false : 'source-map',

    devServer: {
      static: './dist',
      port: 8080,
      open: true,
      hot: true,
      watchFiles: ['./src/template.html'],
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/i,
          use: ['html-loader'],
        },
        {
          test: /\.(png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
      }),
    ],

    resolve: {
      extensions: ['.js'],
    },
  };
};
