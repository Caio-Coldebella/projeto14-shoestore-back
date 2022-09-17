import db from "../src/db.js";

export async function signupController(req, res) {
   const userData = req.body;
   try {
      await db.collection("users").insertOne({
         ...userData,
      });
      console.log(userData)
      res.send(userData)
   } catch (error) {
    console.log(error.message)
    res.sendStatus(500)
   }
}
