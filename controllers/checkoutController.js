import db from "../src/db.js";

export async function postcheckoutController(req,res){
    const token = req.headers.authentication.replace('Bearer: ','');
    const idItem = req.body.id;
    try {
        const iduser = await db.collection("sessions").find({token: token}).toArray();
        if(iduser.length != 1){
            res.sendStatus(404);
            return;
        }
        const cart = await db.collection("carts").find({userId: iduser[0].userId}).toArray();
        if(cart.length != 1){
            res.sendStatus(404)
            return;
        }
        const arrcart = [...cart[0].cart,idItem]
        await db.collection("carts").updateOne({userId: iduser[0].userId},{$set:{cart: arrcart}});
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getcheckoutController(){
    return null;
}