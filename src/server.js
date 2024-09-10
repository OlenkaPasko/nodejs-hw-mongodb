//логіка роботи  express-серверу
import express from 'express';
import contacts from './db/contacts.js';

export const setupServer = () => {
  const app = express(); // app - web-server
    app.get("/contacts", (req, res) => {
    res.send(contacts);
})



app.listen(3000, () => {
  console.log('Server running on 3000 PORT');
});

};

//req -це об'єкт який має інформацію про запит res - це об'єкт який отримує відповідь.res відправляє відповідб тому хто цей запити зробив

