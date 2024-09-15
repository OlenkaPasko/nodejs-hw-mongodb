import { Router } from 'express';
import* as contactControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router(); //об'єкт в який можна додавати маршрут

contactsRouter.get('/', ctrlWrapper(contactControllers.getAllContactController));

contactsRouter.get(
  '/:id',
  ctrlWrapper(contactControllers.getContactByIdController),
);

contactsRouter.post('/', ctrlWrapper(contactControllers.addContactController));
contactsRouter.post(
  '/:id',
  ctrlWrapper(contactControllers.upsertContactController),
);
export default contactsRouter;
