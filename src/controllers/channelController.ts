import { Response } from 'express';
import {
  createChannelService,
  getChannelsService,
} from '../services/channelService';
import { channelValidator } from '../validators/channelValidator';

const createChannel = async (req: any, res: Response) => {
  try {
    const { error } = channelValidator.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    const newChannel = await createChannelService(req.body.name, req.user.id);
    res.status(201).json(newChannel);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getChannels = async (req: any, res: Response) => {
  try {
    const { workspaceId } = req.params;
    const channels = await getChannelsService(workspaceId);

    if (!channels || channels.length === 0) {
      return res
        .status(404)
        .json({ message: 'No channels found for this workspace' });
    }

    res.status(200).json(channels);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { createChannel, getChannels };
