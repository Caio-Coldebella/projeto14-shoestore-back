import db from "../src/db.js";

export async function loginController(req, res) {
   const userData = req.body;
   try {
      await db.collection("users").findOne({name:'123'});
      console.log(userData)
      res.send(userData)
   } catch (error) {
    console.log(error.message)
    res.sendStatus(500)
   }
}
