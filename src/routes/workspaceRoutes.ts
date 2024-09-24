import { Router } from 'express';
import { createWorkspace } from '../controllers/workspaceController';
import { createChannel, getChannels } from '../controllers/channelController';
import { inviteUser } from '../controllers/workspaceController';

const router = Router();

router.post('/workspace', createWorkspace);
router.post('/workspace/invite', inviteUser);
router.post('/channel', createChannel);
router.get('/channel/:workspaceId', getChannels);

export default router;
