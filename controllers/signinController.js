import db from "../src/db.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export async function signinController(req, res) {
   const token = uuid();
   const userData = res.locals.data;
   try {
      const user = await db
         .collection("users")
         .find({ name: userData.name })
         .toArray();

      if (user.length === 0) {
         res.sendStatus(401);
         return;
      }
      if (!bcrypt.compareSync(userData.password, user[0].password)) {
         res.sendStatus(404);
         return;
      }

      await db.collection("sessions").insertOne({
         userId: user[0]._id,
         token,
         lastStatus: Date.now(),
      });
      res.send({
         token,
         name: userData.name,
         _id: user[0]._id,
      });
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500);
   }
}
