/* eslint-disable */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import syncDatabase from '../scripts/syncDatabase';
// import Html from '../client/components/Html';
// import App from '../client/components/App';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../scripts/webpack.conf';

const compiler = webpack(webpackConfig);

function runServer() {

  const app = express();

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  // app.get('*', function response(req, res) {
  //   res.sendFile(path.join(__dirname, 'index.html'));
  // });

  // app.get('*', (req, res, next) => {
  //   try {
  //     const html = ReactDOMServer.renderToStaticMarkup(
  //       <Html title="Error">
  //         {ReactDOMServer.renderToString(<App />)}
  //       </Html>,
  //     );
  //     res.status(200);
  //     res.send(`<!doctype html>${html}`);
  //   } catch (e) {
  //     next(new Error());
  //   }
  // });
  //
  // app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  //   const html = ReactDOMServer.renderToStaticMarkup(
  //     <Html title="Internal Server Error">
  //       Page error
  //     </Html>,
  //   );
  //   res.status(500);
  //   res.send(`<!doctype html>${html}`);
  // });

  app.listen(3000, () => {
    console.log('The server is running at http://localhost:3000/');
  });
}

syncDatabase()
  .then(runServer)
  .catch(e => {
    console.log('Failed to start server.');
    console.trace(e);
  });
