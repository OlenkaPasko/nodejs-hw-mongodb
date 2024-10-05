import { Schema, model } from 'mongoose';

import { genreList} from '../../constants/contacts.js';

import { handleSaveError, setUpdateOptions } from './hooks.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: String,
    isFavourite: {
      type: Boolean,
      default: false,
      required: true,
    },
    contactType: {
      type: String,
      enum: genreList,
      default: 'personal',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);
//монгус-схема, для запитів роботи з базою
contactSchema.post('save', handleSaveError);//якщо після додавання сталась помилка,виклич цю функцію handleSaveError
contactSchema.pre('findOneAndUpdate', setUpdateOptions);//якщо перед оновленням,виклич цю функцію setUpdateOptions
contactSchema.post('findOneAndUpdate', handleSaveError);//якщо після оновлення сталась помилка виклич цю функцію handleSaveError

const ContactCollection = model('contacts', contactSchema);
export const sortFields = [
  'name',
  'phoneNumber',
  'email',
  'contactType',
  'createdAt',
  'updatedAt',
];

export default ContactCollection;
