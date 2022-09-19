import Joi from "joi";
import db from "../src/db.js";

export default async function signupMiddleware(req, res, next) {
   const userData = req.body;
   const postSchema = Joi.object({
      name: Joi.string().min(1).required(),
      email: Joi.string().email({ tlds: { allow: false } }),
      password: Joi.string().min(1).required(),
      address: Joi.string().min(1).required(),
      phone: Joi.required(),
   });
   const validate = postSchema.validate(userData);
   if (validate.error) {
      res.status(400).send(validate.error);
      return;
   }
   const hasuser = await db
      .collection("users")
      .find({ name: userData.name })
      .toArray();
   if (hasuser.length > 0) {
      res.status(400).send("Esse usuário já está cadastrado");
      return;
   }

   res.locals.data = userData;
   next();
}
