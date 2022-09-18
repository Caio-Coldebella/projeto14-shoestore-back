import { Router } from "express";
import { getcheckoutController, postcheckoutController } from "../controllers/checkoutController.js";
const checkoutrouter = Router();
checkoutrouter.post('/checkout',postcheckoutController);
checkoutrouter.get('/checkout',getcheckoutController);
export default checkoutrouter;