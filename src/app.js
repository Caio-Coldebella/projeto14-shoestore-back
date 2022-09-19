import express from "express";
import cors from "cors";
import router from "../routers/index.js";
import db from "./db.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

setInterval(async () => {
   const seconds = Date.now() - 15 * 1000;
   console.log(seconds);
   try {
      const inactiveParticipants = await db
         .collection("sessions")
         .find({ lastStatus: { $lte: seconds } })
         .toArray();
      if (inactiveParticipants.length > 0) {
         console.log("removendo uns manos");
         await db
            .collection("sessions")
            .deleteMany({ lastStatus: { $lte: seconds } });
      }
   } catch (error) {
      console.log(error.message);
      res.sendStatus(500);
   }
}, 20000);
app.listen(process.env.PORT, () => {
   console.log("Server running on port " + process.env.PORT);
});