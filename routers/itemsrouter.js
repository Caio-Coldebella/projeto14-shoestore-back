import { Router } from "express";
import { itemspostcontroller, itemsgetcontroller } from "../controllers/itemscontroller.js";
import itemMiddleware from "../middlewares/itemMiddleware.js";
const itemsrouter = Router();
itemsrouter.post('/',itemMiddleware,itemspostcontroller);
itemsrouter.get('/',itemsgetcontroller);
export default itemsrouter;