const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/app.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    resolve: {
        // Tell webpack to try adding ".ts" to `import ...` statements it parses
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            },
            {
                test: /\.(png|jpg|gif|xml|json)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }  
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "./static" }
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 8000,
        host: "0.0.0.0"
    }
};
