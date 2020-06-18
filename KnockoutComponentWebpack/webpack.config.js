const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const terser = require('terser');
const CopyPlugin = require('copy-webpack-plugin');
var staticFileDestination = path.resolve(__dirname, 'wwwroot/dist/vendor');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
console.log(staticFileDestination)

// Need to have an alias for vue or else we get a runtime error since
// the module that is bundled does not have the compiler
module.exports = {
    mode: "development",
    entry: {
        hello: './Views/Home/hello.ts',


        // This is the css bundle. It will generate a useless bootstrap.bundle.js file, but all the styles
        // will be wrapped in a single file, bootstrap.bundle.css
        bootstrap: ['./node_modules/bootstrap/dist/css/bootstrap.css', './node_modules/bootstrap-slider/dist/css/bootstrap-slider.css',
            './node_modules/bootstrap4-toggle/css/bootstrap4-toggle.min.css'
        ]

    },
    resolve: {
        extensions: ['.js', '.ts', '.css'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        library: '[name]',
        libraryTarget: 'var',
    },
    externals: {
        'knockout': 'ko',
        'jquery': '$'
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin(
            {
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }]
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader?silent=false'
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        //options: {
                        //    publicPath: './wwwroot/dist/styles'
                        //}
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './node_modules/popper.js/dist/popper.js',
                    to: staticFileDestination,
                    transform(content, absoluteForm) {
                        return terser.minify(content.toString()).code.toString();
                    }
                },
                {
                    from: './node_modules/popper.js/dist/popper-utils.js',
                    to: staticFileDestination,
                    transform(content, absoluteForm) {
                        return terser.minify(content.toString()).code.toString();
                    }
                },
                {
                    from: './node_modules/bootstrap/dist/js/bootstrap.js',
                    to: staticFileDestination,
                    transform(content, absoluteForm) {
                        return terser.minify(content.toString()).code.toString();
                    }
                },
                {
                    from: './node_modules/bootstrap-slider/dist/bootstrap-slider.min.js',
                    to: staticFileDestination
                    // Using terser to minify the bootstrap-slider.js file caused
                    // it to be incorrect
                    // Using the min file and skipping the terser call
                },
                {
                    from: './node_modules/respond.js/dest/respond.min.js',
                    to: staticFileDestination,
                    transform(content, absoluteForm) {
                        return terser.minify(content.toString()).code.toString();
                    }
                },
                {
                    from: './node_modules/jquery/dist/jquery.js',
                    to: staticFileDestination,
                    transform(content, absoluteForm) {
                        return terser.minify(content.toString()).code.toString();
                    }
                },
            ]
        })
        // new BundleAnalyzerPlugin()
    ]
}