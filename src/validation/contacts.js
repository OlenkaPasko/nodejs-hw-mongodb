import Joi from 'joi';
import { genreList } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().required().messages({
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().required(),
  contactType: Joi.string()
    .valid(...genreList)
    .required(),
  isFavourite: Joi.boolean(),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.number().valid(...genreList),
});
