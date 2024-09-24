import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkspace extends Document {
  name: string;
  ownerId: string; // Creator of the workspace
  slug: string;
}

const workspaceSchema: Schema = new Schema({
  name: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  slug: { type: String, required: true, unique: true },
});

export default mongoose.model<IWorkspace>('Workspace', workspaceSchema);
