import { Response } from 'express';
import {
  createWorkspaceService,
  inviteUserService,
} from '../services/workspaceService';
import {
  inviteUserValidator,
  workspaceValidator,
} from '../validators/workspaceValidator';

const createWorkspace = async (req: any, res: Response) => {
  try {
    const { error } = workspaceValidator.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const newWorkspace = await createWorkspaceService(
      req.body.name,
      req.user.id
    );
    res.status(201).json(newWorkspace);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const inviteUser = async (req: any, res: Response) => {
  try {
    const { error } = inviteUserValidator.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    const { email, workspaceId } = req.body;
    await inviteUserService(email, workspaceId, req.user.id);
    res.status(200).json({ message: 'User invited to the workspace' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { createWorkspace, inviteUser };
