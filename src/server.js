//логіка роботи  express-серверу
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

export const setupServer = () => {
  const app = express(); // app - web-server
  app.use(cors());
  app.use(pino());

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

app.listen(3000, () => {
  console.log('Server running on 3000 PORT');
});

};

