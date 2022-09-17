import db from "../src/db.js";

export async function statusController(req, res) {
   const { name } = req.body;

   try {
      const existingUser = await db
         .collection("sessions")
         .findOne({ name: name });

      if (!existingUser) {
         res.sendStatus(404);
         return;
      }

      await db
         .collection("sessions")
         .updateOne({ name: name }, { $set: { lastStatus: Date.now() } });
      res.sendStatus(200);
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500)
   }
}
