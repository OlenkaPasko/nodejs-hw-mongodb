import { Router } from 'express';
import * as authControllers from '../controllers/auth.js';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';

import { userSignupSchema, userSigninSchema } from '../validation/users.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userSignupSchema),
  ctrlWrapper(authControllers.signupController),
);


export default authRouter;
