import { Response } from 'express';
import UserImage from '../models/UserImage';

const getUserImages = async (req: any, res: Response) => {
  try {
    const images = await UserImage.find({ userId: req.user.id });
    res.status(200).json(images);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export { getUserImages };
