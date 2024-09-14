import * as contactServises from '../services/contacts.js';

export const  getAllContactControllers = async (req, res) => {
  const data = await contactServises.getAllContact();

  res.json({
    status: 200,
    message: 'Successfully found contacts',
    data,
  });
};

export const getContactByIdControllers = async (req, res) => {
  const { id } = req.params;
  const data = await contactServises.getContactById(id);

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
};
