import { Router } from "express";
import checkoutrouter from "./checkoutRouter.js";
import itemsrouter from "./itemsrouter.js";
import signinRouter from "./signinRouter.js";
import signupRouter from "./signupRouter.js";
import statusRouter from './statusRouter.js';
import completedRouter from './completedRouter.js';

const router = Router();
router.use(itemsrouter);
router.use(signinRouter);
router.use(signupRouter);
router.use(statusRouter)
router.use(checkoutrouter)
router.use(completedRouter)
export default router;
