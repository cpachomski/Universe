import ExtractTextPlugin from "extract-text-webpack-plugin";

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: "css/styles.css"
});

export default ExtractTextPluginConfig;
