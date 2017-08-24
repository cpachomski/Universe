import React from "react";

export default ({ body, title }) => {
  return `  
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/public/css/styles.css" />
      </head>
      <body>
        <div id="universe">${body}</div>
      </body>
      <script src="/public/js/app.bundle.js"></script>
    </html>
    `;
};
