const path = require("path");
import HTMLWebpackPlugin from "html-webpack-plugin";

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    title: "Universe",
    template: path.resolve(__dirname, "../../src/templates/index.ejs"),
    rootId: "universe",
    inject: "body"
});

export default HTMLWebpackPluginConfig;
