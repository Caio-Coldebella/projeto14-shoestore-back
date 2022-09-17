import { Router } from 'express';
import { signupController } from '../controllers/signupController.js';

const signupRouter = Router()
signupRouter.post('/sign-up', signupController)
export default signupRouter
