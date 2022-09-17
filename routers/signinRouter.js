import { Router } from 'express';
import { signinController } from '../controllers/signinController.js';

const signinRouter = Router()
signinRouter.post('/sign-in', signinController)
export default signinRouter
