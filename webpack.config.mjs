import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'buble-loader',
        options: {
          objectAssign: 'Object.assign',
          transforms: {
            modules: false
          }
        },
      },
    ],
  },
  mode: 'development',
};
