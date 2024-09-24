import { Response } from 'express';
import multer from 'multer';
import { uploadImageService } from '../services/uploadService';
import UserImage from '../models/UserImage';

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single('image');

const uploadImage = async (req: any, res: Response) => {
  try {
    await new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(req.file);
      });
    });

    // Use the service to handle additional logic
    const filePath = await uploadImageService(req.file);
    await UserImage.create({ userId: req.user.id, imagePath: filePath });

    res.status(200).json({ path: filePath });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { uploadImage };
