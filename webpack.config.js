var Webpack = require("webpack");

module.exports = {
  "context":        __dirname,

  "entry":          {
                      "styles": [
                                  "./styles.scss"
                                ]
                    },

  "resolve":        {
                      "extensions": [
                        "",
                        ".scss"
                      ]
                    },

  "module":         {
                      "loaders":  [
                                    {
                                      "test":   /\.scss$/,
                                      "loader": "style-loader!css-loader!autoprefixer-loader!sass-loader"
                                    }
                                  ]
                    },

  "output":         {
                      "filename":       "[name].js",
                      "chunkFilename":  "chunk_[id].js",
                      "publicPath":     "/bundles/",
                      "pathinfo":       true,
                      "path":           __dirname + "/bundles/"
                    },

  "plugins":        [
                      new Webpack.optimize.DedupePlugin(),
                      new Webpack.optimize.OccurenceOrderPlugin(),
                      new Webpack.optimize.UglifyJsPlugin(
                        {
                          "output":   {
                                        "inline_scripts":   true
                                      }
                        }
                      ),
                    ],

  "resolveLoader":  {
                      "root":   __dirname + "/node_modules"
                    }
};
