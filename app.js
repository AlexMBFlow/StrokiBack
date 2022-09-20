import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import routers from "./routes/index.js";

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", routers)

const start = () => {
    app.listen(PORT, () => {
        console.log(`Server start on ${PORT} port`);
    })
}

start()