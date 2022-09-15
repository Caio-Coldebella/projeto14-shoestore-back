import express from 'express';
import cors from "cors";
import router from '../routers/index.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', (req,res)=>{
    res.status(200).send("Hello world");
});

app.listen(process.env.PORT, () => {
    console.log("Server running");
});
/*app.listen(5000, ()=>{
    console.log("Server running on port 5000")
});*/