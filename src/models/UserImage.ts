import mongoose, { Schema, Document } from 'mongoose';

interface IUserImage extends Document {
  userId: string; // Reference to the User
  imagePath: string; // Path of the uploaded image
}

const userImageSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  imagePath: { type: String, required: true },
});

const UserImage = mongoose.model<IUserImage>('UserImage', userImageSchema);
export default UserImage;
