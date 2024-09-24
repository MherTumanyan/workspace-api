import { Router } from 'express';
import { getUserImages } from '../controllers/userController';

const router = Router();

router.get('/user/images', getUserImages);

export default router;
