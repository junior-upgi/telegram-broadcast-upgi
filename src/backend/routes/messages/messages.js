import express from 'express';

import tokenValidate from '../../middleware/preprocessing/tokenValidate.js';

import submitMessageToQueue from './submitMessageToQueue.js';

import notImplemented from '../../middleware/preprocessing/notImplemented.js';

const messagesRouter = express.Router();

messagesRouter.route('/api/messages')
    .all(tokenValidate) // token validation
    .get(notImplemented)
    .post(submitMessageToQueue) // route to receive message submission
    .put(notImplemented)
    .patch(notImplemented)
    .delete(notImplemented);

module.exports = messagesRouter;
