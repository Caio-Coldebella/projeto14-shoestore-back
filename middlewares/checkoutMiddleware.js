import db from "../src/db.js";

export async function postcheckoutMiddleware(req,res,next){
    console.log("oi")
    const token = req.headers.authentication?req.headers.authentication.replace('Bearer: ',''):null;
    const idItem = req.body.id;
    try {
        const iduser = await db.collection("sessions").find({token: token}).toArray();
        if(iduser.length != 1){
            res.sendStatus(404);
            return;
        }
        const cart = await db.collection("carts").find({userId: iduser[0].userId}).toArray();
        if(cart.length != 1){
            res.sendStatus(404);
            return;
        }
        const arrcart = [...cart[0].cart,idItem];
        res.locals.cart = arrcart;
        res.locals.id = iduser[0].userId;
        next();
    }catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getcheckoutMiddleware(req,res,next){
    const token = req.headers.authentication?req.headers.authentication.replace('Bearer: ',''):null;
    try {
        const iduser = await db.collection("sessions").find({token: token}).toArray();
        if(iduser.length != 1){
            res.sendStatus(404);
            return;
        }
        res.locals.id = iduser[0].userId;
        next();
    }catch(error){
        console.error(error);
        res.sendStatus(500);
    }
}