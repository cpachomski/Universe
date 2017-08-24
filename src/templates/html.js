import React from "react";

export default ({ body, title }) => {
  return `  
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/public/css/index.css" />
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/public/js/bundle.js"></script>
    </html>
    `;
};
