import { Router } from "express";
import {getAllContactControllers, getContactByIdControllers} from "../controllers/contacts.js"

const contactsRouter = Router();//об'єкт в який можна додавати маршрут

contactsRouter.get('/', getAllContactControllers);

contactsRouter.get('/:id', getContactByIdControllers);
export default contactsRouter;
