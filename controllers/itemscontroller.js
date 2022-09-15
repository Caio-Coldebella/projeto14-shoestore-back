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
    res.status(200).send("hellooo");
}