import { Router } from "express";
import itemsrouter from "./itemsrouter.js";

const router = Router();
router.use(itemsrouter);
export default router;