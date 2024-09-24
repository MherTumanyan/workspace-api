import mongoose, { Schema, Document } from 'mongoose';

export interface IChannel extends Document {
  name: string;
  workspaceId: string; // Reference to Workspace
  ownerId: string; // Creator of the channel
}

const channelSchema: Schema = new Schema({
  name: { type: String, required: true },
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true,
  },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<IChannel>('Channel', channelSchema);
