//логіка роботи  express-серверу
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import { env } from './utils/env.js';
import contactsRouter from './routers/contacts.js';

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

  app.use('/contacts', contactsRouter); //якщо прийде будь який запит який читається/contacts то потрібно
  //шукати обробник запитів у цьому об'єкті contactsRouter!

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  app.use((error, req, res, next) => {
    const { status = 500, message } = error;
    res.status(status).json({
      message,
    });
  });
  //запуск сервера
  const PORT = Number(env('PORT', 3000));

  app.listen(PORT, () => console.log('Server running on port 3000'));
};

//req -це об'єкт який має інформацію про запит res - це об'єкт який отримує відповідь
//.res відправляє відповідб тому хто цей запити зробив
