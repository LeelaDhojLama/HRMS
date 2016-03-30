module.exports = {
  context: __dirname + "/src",
  entry: "./main.js",

  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  loaders: [
        {
          test: /\.jsx?$/,

          include: [
            __dirname + "/src"
          ],

          exclude: /node_modules/,

          loader: 'babel'
        }
    ]
}