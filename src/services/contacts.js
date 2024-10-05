import ContactCollection from '../db/models/Contacts.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({
  perPage,
  page,
  sortBy = '_id',
  sortOrder = SORT_ORDER[0],
}) => {
  const skip = (page - 1) * perPage;
  const contactQuery = ContactCollection.find();

  const contacts = await contactQuery
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const count = await ContactCollection.find()
    .merge(contactQuery)
    .countDocuments();

  const paginationData = calculatePaginationData({ count, perPage, page });

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = (id) => ContactCollection.findById(id);

export const createContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (filter, data, options = {}) => {
  //findOneAndUpdate пошук одного документа
  const rawResult = await ContactCollection.findOneAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  //...options,налаштування оновлення...includeResultMetadata - чи оновився сервер
  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = (filter) =>
  ContactCollection.findOneAndDelete(filter);
