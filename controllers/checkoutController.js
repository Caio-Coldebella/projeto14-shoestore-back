import db from "../src/db.js";

export async function postcheckoutController(req,res){
    const id = res.locals.id;
    const newarr = res.locals.cart;
    try{
        await db.collection("carts").updateOne({userId: id},{$set:{cart: newarr}});
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getcheckoutController(req,res){
    const id = res.locals.id;
    try {
        const cart = await db.collection("carts").find({userId: id}).toArray();
        if(cart.length != 1){
            res.sendStatus(404)
            return;
        }
        res.send(cart[0].cart);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}