import { Router } from 'express';
import { loginController } from '../controllers/loginController.js';

const loginRouter = Router()
loginRouter.post('/sign-in', loginController)
export default loginRouter
