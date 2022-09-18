import db from "../src/db.js";

export async function statusController(req, res) {
   const { token, lastStatus, userId } = req.body;
   try {
      const existingUser = await db
         .collection("sessions")
         .find({ token: token }).toArray();
      if (existingUser.length === 0) {
         await db.collection("sessions").insertOne({userId, lastStatus, token});
         res.sendStatus(200);
         return;
      }

      await db
         .collection("sessions")
         .updateOne({ token: token }, { $set: { lastStatus: Date.now() } });
      res.sendStatus(200);
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500)
   }
}
