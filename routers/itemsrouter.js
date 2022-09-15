import { Router } from "express";
import { itemspostcontroller, itemsgetcontroller } from "../controllers/itemscontroller.js";

const itemsrouter = Router();
itemsrouter.post('/items',itemspostcontroller);
itemsrouter.get('/items',itemsgetcontroller);
export default itemsrouter;