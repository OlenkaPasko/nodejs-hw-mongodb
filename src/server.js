//логіка роботи  express-серверу
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';



export const setupServer = () => {
  const app = express();
  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(logger);
  app.use(cors());
  app.use(express.json());

  //routes

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url}Not found`,
    });
  });
  //обробка помилок

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: error.message,
    });
  });

  //запуск сервера
  const PORT = Number(env("PORT",3000));
  app.listen(PORT, () => console.log('Server is running on port {PORT}'));
};



//req -це об'єкт який має інформацію про запит res - це об'єкт який отримує відповідь.res відправляє відповідб тому хто цей запити зробив

