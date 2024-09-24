import slugify from 'slugify';
import User from '../models/User';
import Workspace from '../models/Workspace';
import WorkspaceUser, { UserRole } from '../models/WorkspaceUser';

const createWorkspaceService = async (name: string, userId: string) => {
  const existingWorkspace = await Workspace.findOne({ name });
  if (existingWorkspace) {
    throw new Error('There is a workspace with that name');
  }
  const slug = slugify(name, { lower: true });
  const newWorkspace = await Workspace.create({ name, ownerId: userId, slug });

  // Add user to WorkspaceUser collection
  await WorkspaceUser.create({
    userId,
    role: UserRole.ADMIN,
    workspaceId: newWorkspace._id,
  });

  return newWorkspace;
};

const inviteUserService = async (
  email: string,
  workspaceId: string,
  ownerId: string
) => {
  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  // Check if the workspace exists and the owner is correct
  const workspace = await Workspace.findById(workspaceId);
  if (!workspace || workspace.ownerId.toString() !== ownerId) {
    throw new Error('Workspace not found or you are not the owner');
  }

  // Check if the user is already a member of the workspace
  const existingWorkspaceUser = await WorkspaceUser.findOne({
    userId: user.id,
    workspaceId: workspace._id,
  });

  if (existingWorkspaceUser) {
    throw new Error('User is already a member of this workspace');
  }

  // Add the user to the WorkspaceUser collection
  await WorkspaceUser.create({ userId: user.id, workspaceId: workspace._id });
};

export { createWorkspaceService, inviteUserService };
