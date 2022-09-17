import { Router } from 'express';
import { statusController } from '../controllers/statusController.js';

const statusRouter = Router()
statusRouter.post('/status', statusController)
export default statusRouter
