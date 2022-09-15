import { Router } from "express";
import { itemspostcontroller } from "../controllers/itemscontroller.js";

const itemsrouter = Router();
itemsrouter.post('/items',itemspostcontroller);
export default itemsrouter;