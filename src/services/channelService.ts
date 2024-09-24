import Channel from '../models/Channel';
import WorkspaceUser from '../models/WorkspaceUser';

const createChannelService = async (name: string, userId: string) => {
  // Check if user is a member of the workspace
  const workspaceUser = await WorkspaceUser.findOne({ userId });
  if (!workspaceUser) {
    throw new Error('User is not a member of any workspace');
  }

  const newChannel = await Channel.create({
    ownerId: userId,
    name,
    workspaceId: workspaceUser.workspaceId,
  });
  return newChannel;
};

const getChannelsService = async (workspaceId: string) => {
  const channels = await Channel.find({ workspaceId });
  return channels;
};

export { createChannelService, getChannelsService };
