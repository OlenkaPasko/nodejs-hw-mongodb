//логіка роботи  express-серверу
import express from 'express';
import cors from 'cors';

import { env } from './utils/env.js';
import contactsRouter from './routers/contacts.js';

import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import logger from './middlewares/logger.js';

export const setupServer = () => {
  const app = express();

  app.use(logger);
  app.use(cors());
  app.use(express.json());

  app.use('/contacts', contactsRouter); //якщо прийде будь який запит який читається/contacts то потрібно
  //шукати обробник запитів у цьому об'єкті contactsRouter!

  app.use(notFoundHandler);
  app.use(errorHandler);

  //запуск сервера
  const PORT = Number(env('PORT', 3000));

  app.listen(PORT, () => console.log('Server running on port 3000'));
};

//req -це об'єкт який має інформацію про запит res - це об'єкт який отримує відповідь
//.res відправляє відповідб тому хто цей запити зробив
