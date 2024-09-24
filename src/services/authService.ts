import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const signupService = async (userData: { email: string; password: string }) => {
  const { email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });
  return newUser;
};

const loginService = async (userData: { email: string; password: string }) => {
  const { email, password } = userData;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });
  return token;
};

export { signupService, loginService };
