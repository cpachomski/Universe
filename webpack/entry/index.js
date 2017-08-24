import path from "path";

const devConfig = {
    app: [
        "babel-polyfill",
        "react-hot-loader/patch",
        path.resolve(__dirname, "../../src/client")
    ]
};

const prodConfig = {
    index: path.resolve(__dirname, "../../src/client.js")
};

export default (process.env.NODE_ENV === "production" ? prodConfig : devConfig);
