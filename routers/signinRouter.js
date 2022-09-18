import { Router } from 'express';
import { signinController } from '../controllers/signinController.js';
import signinMiddleware from '../middlewares/signinMiddleware.js';

const signinRouter = Router()
signinRouter.post('/sign-in',signinMiddleware, signinController)
export default signinRouter
