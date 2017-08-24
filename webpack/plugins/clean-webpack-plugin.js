import path from "path";
import CleanWebpackPlugin from "clean-webpack-plugin";

const CleanWebpackPluginConfig = new CleanWebpackPlugin(
    [path.resolve(__dirname, "../../src/server/public")],
    { allowExternal: true }
);

export default CleanWebpackPluginConfig;
