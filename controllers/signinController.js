import db from "../src/db.js";
import { v4 as uuid } from "uuid";

export async function signinController(req, res) {
   const token = uuid();
   const userData = req.body;
   try {
      const existingUser = await db
         .collection("sessions")
         .findOne({ token: token });
      if (existingUser) {
         return res.sendStatus(409);
      }
      await db.collection("sessions").insertOne({
         name: userData.name,
         token,
         lastStatus: Date.now(),
      });
      res.send({
         token,
         name: userData.name,
      });
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500);
   }
}
