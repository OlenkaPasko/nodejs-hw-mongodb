//логіка роботи  express-серверу
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

export const startServer = ()=>{

  const app = express();
  const logger = pino({
    transport: {
      target:"pino-pretti"
    }
  })
  app.use(logger);
  app.use(cors());
  app.use(express.json());

  //routes

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url}Not found`,
    });
  })
  //обробка помилок

  app.use((err, req, res, next) => {
    res.status(500).json({
      message:console.error.message,
    })
  })
}



//req -це об'єкт який має інформацію про запит res - це об'єкт який отримує відповідь.res відправляє відповідб тому хто цей запити зробив

