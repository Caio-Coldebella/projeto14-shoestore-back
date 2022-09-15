import { Router } from 'express';
import { createAccountController } from '../controllers/createAccountController.js';

const createAccountRouter = Router()
createAccountRouter.post('/sign-up', createAccountController)
export default createAccountRouter
