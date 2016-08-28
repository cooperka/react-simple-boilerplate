import React from 'react';

const Html = (props) => (
  <html lang="en">

    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
      <link rel="stylesheet" href="build/app.css" />
      <link rel="icon" href="favicon.ico" />
      <title>{props.title}</title>
    </head>

    <body>
      <div id="appContainer" dangerouslySetInnerHTML={{ __html: props.body }} />
      <script src="build/app.js" />
    </body>

  </html>
);

export default Html;