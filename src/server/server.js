import path from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "components/app";
import html from "../templates/html";

const server = express();
const PORT = process.env.PORT || 1337;

server.use("/public", express.static("./public"));

server.get("/*", (req, res) => {
    const body = renderToString(<App />);
    const title = "Universe";
    res.send(html({ body, title }));
});

server.listen(PORT, () => {
    console.log(`Serving up something good on port: ${PORT}`);
});
