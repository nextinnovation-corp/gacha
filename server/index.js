import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import syncDatabase from '../scripts/syncDatabase';
import Html from '../client/components/Html';

function runServer() {
  const app = express();

  app.get('*', async (req, res) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Html title="Error">
        Hello, error!
      </Html>,
    );
    res.status(500);
    res.send(`<!doctype html>${html}`);
  });

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
