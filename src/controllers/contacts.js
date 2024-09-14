import * as contactServises from '../services/contacts.js';

export const getAllContactControllers = async (req, res) => {
    try {
        const data = await contactServises.getAllContact();

        res.json({
            status: 200,
            message: 'Successfully found contacts',
            data,
        });
    }
    catch (error) {
         const { status = 500, message } = error;
         res.status(status).json({
           message: 'Something went wrong',
         });
    }
}



export const getContactByIdControllers = async (req, res) => {
try {
  const { id } = req.params;
  const data = await contactServises.getContactById(id);

  if (!data) {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  }

  res.json({
    status: 200,
    message: `Contact with ${id} successfully find`,
    data,
  });
} catch (error) {
 const { status = 500, message } = error;
 res.status(status).json({
   message: 'Something went wrong',
 });
}
};
