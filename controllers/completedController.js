import db from "../src/db.js";

export async function postCompletedController(req, res) {
   const { name, sum } = req.body;
   try {
      const userinfo = await db.collection("users").findOne({ name: name });
      const userCartInfo = await db
         .collection("carts")
         .findOne({ userId: userinfo._id });
      await db.collection("history").insertOne({
         userId: userinfo._id,
         name: userinfo.name,
         products: userCartInfo.cart,
         address: userinfo.address,
         fone: userinfo.phone,
         email: userinfo.email,
         sum: sum
      });
      res.sendStatus(201);
   } catch (error) {
      res.status(500).send(error.message);
   }
}
export async function getCompletedController(req, res) {
   const { user } = req.headers;
   try {
      const userinfo = await db.collection("users").findOne({ name: user });
      const completedInfo = await db
         .collection("history")
         .findOne({ userId: userinfo._id });
      await db.collection("carts").updateOne({userId: userinfo._id},{$set:{cart: []}});
      res.send(completedInfo);
   } catch (error) {
      res.send(error.message).status(500);
   }
}
