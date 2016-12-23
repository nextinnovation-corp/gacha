import express from 'express';
import syncDatabase from '../scripts/syncDatabase';

syncDatabase()
  .then(() => {
    const app = express();
    app.listen(3000, () => {
      console.log('The server is running at http://localhost:3000/');
    });
  })
  .catch(e => {
    console.log('Failed to start server.');
    console.trace(e);
  });
