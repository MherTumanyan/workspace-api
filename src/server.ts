import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { protect } from './middleware/auth';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import uploadRoutes from './routes/uploadRoutes';
import workspaceRoutes from './routes/workspaceRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', protect, workspaceRoutes);
app.use('/api', protect, uploadRoutes);
app.use('/api', protect, userRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
