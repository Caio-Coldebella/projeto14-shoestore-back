import Joi from "joi";

export default function itemMiddleware(req,res,next){
    const obj = req.body;
    const itemspostSchema = Joi.object({
        name: Joi.string().min(1).required(),
        price: Joi.number().required(),
        description: Joi.string().min(1).required(),
        type: Joi.string().min(1).required(),
        image: Joi.string().min(1).required()
    });
    const validate = itemspostSchema.validate(obj);
    if(validate.error){
        console.error(validate.error)
        res.sendStatus(400);
        return;
    }
    let valid = false;
    try {
        new URL(obj.image);
        valid = true;
    } catch (error) {
        valid = false;
    }
    if(!valid){
        res.sendStatus(400);
        return;
    }
    res.locals.obj = obj;
    next();
}