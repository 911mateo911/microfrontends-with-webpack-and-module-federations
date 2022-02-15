const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new ModuleFederationPlugin(
            {
                name: 'iUseTheNavbar',
                filename: 'remoteEntry.js',
                /**
                 * now the remotes contains all the modules that you import from your same-origin apps
                 * the keys should be exactly the same as the ones provided on the app-that-has-navbar webpack config
                 * 
                 * then on the value append the name before the url of you other app
                 * since we are using it on dev mode i hardcoded the url
                 * 
                 * then you can lazy import with React.lazy from your app on the 
                 * path '{appName}/componentName'
                 * 
                 * in this case iHaveNavbar/Navbar
                 */
                remotes: {
                    iHaveNavbar: 'iHaveNavbar@http://localhost:4000/remoteEntry.js',
                },
            }
        ),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
