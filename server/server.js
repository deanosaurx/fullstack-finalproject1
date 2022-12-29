import express from "express";
import "dotenv/config";
import { dbConnect } from "./config/db.js";
import router from "./routes/routes.js";

const app = express();

dbConnect();

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} `));
