import Joi from "joi";

export default function signinMiddleware(req,res,next){
    const userData = req.body;
    const postSchema = Joi.object({
        name: Joi.string().min(1).required(),
        password: Joi.string().min(1).required(),
    });
    const validate = postSchema.validate(userData);
    if(validate.error){
        res.sendStatus(400);
        return;
    }
    res.locals.data = userData;
    next();
}