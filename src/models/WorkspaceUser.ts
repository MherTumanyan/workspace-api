import mongoose, { Schema, Document } from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}

export interface IWorkspaceUser extends Document {
  userId: string; // Reference to User
  workspaceId: string; // Reference to Workspace
  role: UserRole; // User role in the workspace
}

const workspaceUserSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.MEMBER,
    required: true,
  },
});

export default mongoose.model<IWorkspaceUser>(
  'WorkspaceUser',
  workspaceUserSchema
);
