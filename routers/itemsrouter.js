import { Router } from "express";
import { itemspostcontroller, itemsgetcontroller } from "../controllers/itemscontroller.js";
import itemMiddleware from "../middlewares/itemMiddleware.js";
const itemsrouter = Router();
itemsrouter.post('/items',itemMiddleware,itemspostcontroller);
itemsrouter.get('/items',itemsgetcontroller);
export default itemsrouter;