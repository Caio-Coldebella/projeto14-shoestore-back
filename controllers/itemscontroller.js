import db from "../src/db.js";

export async function itemspostcontroller(req,res){
    const obj = res.locals.obj;
    try {
        await db.collection("items").insertOne(obj);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export async function itemsgetcontroller(req,res){
    const prodtype = req.query.type;
    const name = req.query.name;
    try {
        if(name){
            const arr = await db.collection("items").find({name: name}).toArray();
            if(arr.length === 0){
                res.sendStatus(404);
                return;
            }
            res.send(arr);
        }else if(prodtype){
            const arr = await db.collection("items").find({type: prodtype}).toArray();
            if(arr.length === 0){
                res.sendStatus(404);
                return;
            }
            res.send(arr);
        }else{
            const arr = await db.collection("items").find().toArray();
            if(arr.length === 0){
                res.sendStatus(404);
                return;
            }
            res.send(arr);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}