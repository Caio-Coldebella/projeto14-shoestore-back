import db from "../src/db.js";
import { v4 as uuid } from "uuid";

export async function loginController(req, res) {
   const token = uuid();
   const userData = req.body;
   try {
      const user = await db
         .collection("users")
         .findOne({ name: userData.name });
      if (!user) {
         return res.sendStatus(404);
      }
      await db.collection("sessions").insertOne({
         userId: user._id,
         token,
      });
      res.send(token);
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500);
   }
}
