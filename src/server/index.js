const path = require("path");

require("babel-polyfill");
require("babel-register")({
    resolveModuleSource: require("babel-resolver")(
        path.resolve(__dirname, "../../src")
    )
});

require("./server.js");
