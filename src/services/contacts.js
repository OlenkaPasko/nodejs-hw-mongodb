import ContactCollection from '../db/models/Contacts.js';

export const getAllContact = () => ContactCollection.find();

export const getContactById = (id) => ContactCollection.findById(id);
