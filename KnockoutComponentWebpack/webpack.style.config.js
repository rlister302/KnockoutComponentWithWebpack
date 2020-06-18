//const path = require('path');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//// Need to have an alias for vue or else we get a runtime error since
//// the module that is bundled does not have the compiler
//module.exports = {
//    mode: "production",
//    entry: {
//        bootstrap: ['./node_modules/bootstrap/dist/css/bootstrap.css', './node_modules/bootstrap-slider/dist/css/bootstrap-slider.css',
//            './node_modules/bootstrap4-toggle/css/bootstrap4-toggle.min.css'
//        ]
//    },
//    resolve: {
//        extensions: ['.css'],
//    },
//    //output: {
//    //    filename: '[name].bundle.js',
//    //    path: path.resolve(__dirname, 'wwwroot/dist'),
//    //},
//    optimization: {
//        minimizer: [new OptimizeCSSAssetsPlugin(
//            {
//                cssProcessorPluginOptions: {
//                    preset: ['default', { discardComments: { removeAll: true } }]
//                }
//            })
//        ]
//    },
//    module: {
//        rules: [
//            {
//                test: /\.css$/,
//                use: [
//                    {
//                        loader: MiniCssExtractPlugin.loader
//                    },
//                    'css-loader'
//                ]
//            }
//        ]
//    },
//    plugins: [
//        new MiniCssExtractPlugin({
//            filename: '[name].bundle.css'
//        })
//        //new CleanWebpackPlugin()
//        // new BundleAnalyzerPlugin()
//    ]
//}

////C:\Users\rlister\source\repos\KnockoutComponentWebpack\KnockoutComponentWebpack\node_modules\bootstrap\dist\css\bootstrap.css

////C:\Users\rlister\source\repos\KnockoutComponentWebpack\KnockoutComponentWebpack\node_modules\bootstrap-slider\dist\css\bootstrap-slider.css
////C:\Users\rlister\source\repos\KnockoutComponentWebpack\KnockoutComponentWebpack\node_modules\bootstrap4-toggle\css\bootstrap4-toggle.min.css