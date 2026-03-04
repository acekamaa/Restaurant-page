import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { watchFile } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/scripts/index.js',

    output: {
      filename: 'bundle.js',
      path: path.resolve(import.meta.dirname, 'dist'),
      clean: true,
    },

    mode: isProduction ? "production" : "development",

    devtool: isProduction ? false : "source-map",

    devServer: {
        static: "./dist",
        port: 8080,
        open: true,
        hot: true,
        watchFiles: ['./src/template.html'],
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    resolve: {
        extensions: [".js"],
    },
  };
};
