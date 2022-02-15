const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 4000,
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
        new ModuleFederationPlugin({
            /**
             * the name iHaveNavbar should be used on the other app as a reference to point out at this module
             * it should be exactly the same
             * 
             * it should not contain special characters like -,_ etc
             */
            name: 'iHaveNavbar',
            /**
             * you can check out the remoteEntry.js at the url
             * http://{whateverHostUrAt}/remoteEntry.js
             * basically contains the chunk that you expose to be used on other apps
             */
            filename: 'remoteEntry.js',
            /**
             * this object below contains the component path as a value and
             * a name whatever you like, the remoteEntry.js will be populated
             * by the code you export below
             */
            exposes: {
                './Navbar': './src/Navbar',
                './Button': './src/Button'
            },
            remotes: {
                iUseTheNavbar: 'iUseTheNavbar@http://localhost:3000/remoteEntry.js'
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: require('./package.json').dependencies.react
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
