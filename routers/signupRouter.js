import { Router } from 'express';
import { signupController } from '../controllers/signupController.js';
import signupMiddleware from '../middlewares/signupMiddleware.js';

const signupRouter = Router()
signupRouter.post('/sign-up',signupMiddleware, signupController)
export default signupRouter
