import Joi from 'joi';
import {genreList} from "../constants/contacts.js"

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.number().required(),
  email: Joi.string().email().required(),
contactType: Joi.string().valid(...genreList).required(),

});


