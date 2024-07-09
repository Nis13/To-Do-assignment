import config from "./config";
import express from "express";
import routes from "./routes/index";
const app = express();

app.use(express.json());
app.use(routes);


app.listen(config.port, ()=>{
    console.log("port is listening on 8000");
})
