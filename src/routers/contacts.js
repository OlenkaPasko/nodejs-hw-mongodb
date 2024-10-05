import { Router } from 'express';
import * as contactControllers from '../controllers/contacts.js';

import ctrlWrapper from '../utils/ctrlWrapper.js';

import isValidId from '../middlewares/isValidId.js';
import validateBody from '../utils/validateBody.js';
import {
  contactAddSchema,
  contactPatchSchema,
} from '../validation/contacts.js';

const contactsRouter = Router(); //об'єкт в який можна додавати маршрут

contactsRouter.get(
  '/',
  ctrlWrapper(contactControllers.getAllContactController),
);

contactsRouter.get(
  '/:id',
  isValidId,
  ctrlWrapper(contactControllers.getContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(contactControllers.addContactController),
);
contactsRouter.put(
  '/:id',
  isValidId,
  validateBody(contactAddSchema),
  ctrlWrapper(contactControllers.upsertContactController),
);
contactsRouter.patch(
  '/:id',
  isValidId,
  validateBody(contactPatchSchema),
  ctrlWrapper(contactControllers.patchContactController),
);
contactsRouter.delete(
  '/:id',
  isValidId,
  ctrlWrapper(contactControllers.deleteContactController),
);
export default contactsRouter;
