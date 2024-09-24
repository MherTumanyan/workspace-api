import Joi from 'joi';

export const workspaceValidator = Joi.object({
  name: Joi.string().min(3).required(),
});

export const inviteUserValidator = Joi.object({
  email: Joi.string().email().required(),
  workspaceId: Joi.string().required(),
});
