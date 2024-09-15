import { Router } from 'express';
import {
  getAllContactController,
  getContactByIdController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router(); //об'єкт в який можна додавати маршрут

contactsRouter.get('/', ctrlWrapper(getAllContactController));

contactsRouter.get('/:id', ctrlWrapper(getContactByIdController));
export default contactsRouter;
