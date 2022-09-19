import { Router } from 'express';
import { getCompletedController } from '../controllers/completedController.js';
import { postCompletedController } from '../controllers/completedController.js';

const completedRouter = Router()
completedRouter.post('/completed', postCompletedController)
completedRouter.get('/completed', getCompletedController)
export default completedRouter
