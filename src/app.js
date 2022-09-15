import express from 'express';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).send("Hello world");
});

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});