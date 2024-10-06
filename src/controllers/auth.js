import * as authServices from '../services/auth.js';
//контролер- це обробник маршруту
export const signupController = async (req, res, next) => {
  try {
    const newUser = await authServices.signup(req.body);

    res.status(201).json({
      status: 201,
      message: 'Successfully registered user',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
