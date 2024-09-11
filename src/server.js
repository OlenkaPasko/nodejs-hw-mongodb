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
  app.get('/contacts', async (req, res) => {
    const data = await contactServices.getAllContact();

    res.json({
      status: 200,
      message: 'Successfully found contacts',
      data,
    });
  });
  app.get('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const data = await contactServices.getContactById(id);

    if (!data) {
      return res.status(404).json({
        message: `Contact with id=${id} not found`,
      });
    }

    res.json({
      status: 200,
      message: `Contact with ${id} successfully find`,
      data,
    });
  });

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
  const PORT = Number(env('PORT', 3000));
  app.listen(PORT, () => console.log('Server is running on port {PORT}'));
};

//req -це об'єкт який має інформацію про запит res - це об'єкт який отримує відповідь.res відправляє відповідб тому хто цей запити зробив
