import { Router } from "express";
import itemsrouter from "./itemsrouter.js";
import signinRouter from "./signinRouter.js";
import signupRouter from "./signupRouter.js";
import statusRouter from './statusRouter.js';

const router = Router();
router.use(itemsrouter);
router.use(signinRouter);
router.use(signupRouter);
router.use(statusRouter)
export default router;
