import { Router } from "express";
import { getcheckoutController, postcheckoutController } from "../controllers/checkoutController.js";
import {getcheckoutMiddleware, postcheckoutMiddleware} from "../middlewares/checkoutMiddleware.js";
const checkoutrouter = Router();
checkoutrouter.post('/checkout',postcheckoutMiddleware,postcheckoutController);
checkoutrouter.get('/checkout',getcheckoutMiddleware,getcheckoutController);
export default checkoutrouter;