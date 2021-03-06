import path from "path";
import autoprefixer from "autoprefixer";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
    test: /\.css$/,
    include: path.resolve(__dirname, "../../src"),
    use: ExtractTextPlugin.extract({
        fallback: [
            {
                loader: "style-loader"
            }
        ],
        use: [
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    localIdentName: "[hash:8]"
                }
            },
            {
                loader: "sass-loader"
            }
        ],
        publicPath: path.resolve(__dirname, "../../src/server/public")
    })
};
