import Joi from 'joi';

export const channelValidator = Joi.object({
  name: Joi.string().min(1).required(),
  workspaceId: Joi.string().required(),
});
