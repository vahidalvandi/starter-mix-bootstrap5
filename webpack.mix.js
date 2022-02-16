let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");
mix.setPublicPath("dist");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("src/js/app.js", "dist/js");

mix.sass("src/sass/style.scss", "dist/css");

mix.copyDirectory("src/vendor/", "dist/vendor");

mix.copyDirectory("src/images", "dist/images");

mix.disableNotifications();

mix.webpackConfig({
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     // publicPath: ""
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/page.ejs",
            filename: "page.html",
            inject: false
        }),
    ],
    devServer: {
        hot: true,
        liveReload: true,
        // inline: true,
        // contentBase: __dirname,
        // disableHostCheck: true,
        // watchContentBase: true,
        host: "127.0.0.1",
        open: true,
        port: 8082,
    }
});
