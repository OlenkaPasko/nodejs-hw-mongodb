import { Router } from "express";
import  * as contactsServises from '../services/contacts.js';

const contactsRouter = Router();//об'єкт в який можна додавати маршрут

contactsRouter.get("/", async (req, res) => {
  const data = await contactsServises.getAllContact();

  res.json({
    status: 200,
    message: 'Successfully found contacts',
    data,
  });
});

contactsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await contactsServises.getContactById(id);

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
export default contactsRouter;
