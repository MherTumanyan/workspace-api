import { Request, Response } from 'express';
import { signupService, loginService } from '../services/authService';
import { loginValidator, signupValidator } from '../validators/userValidator';

const signup = async (req: Request, res: Response) => {
  try {
    const { error } = signupValidator.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    const newUser = await signupService(req.body);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { error } = loginValidator.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    const token = await loginService(req.body);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { signup, login };
