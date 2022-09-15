import { Router } from "express";
import itemsrouter from "./itemsrouter.js";
import loginRouter from "./loginRouter.js";
import createAccountRouter from "./createAccountRouter.js";

const router = Router();
router.use(itemsrouter);
router.use(loginRouter);
router.use(createAccountRouter);
export default router;
