import db from "../src/db.js";
import bcrypt from "bcrypt";

export async function signupController(req, res) {
   const userData = res.locals.data;
   const hashpass = bcrypt.hashSync(userData.password,10);
   userData.password = hashpass;
   try {
      await db.collection("users").insertOne({
         ...userData,
      });
      const id = await db.collection("users").find({name: userData.name}).toArray();
      await db.collection("carts").insertOne({
         userId: id[0]._id,
         cart: []
      });
      res.sendStatus(200);
   } catch (error) {
    console.log(error.message)
    res.sendStatus(500)
   }
}
