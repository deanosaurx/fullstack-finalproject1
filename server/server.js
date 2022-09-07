import express from "express";
import "dotenv/config";
import { dbConnect } from "./config/db.js";

const app = express();

dbConnect();

app.get("/", (req, res) => res.send("HELLO THERE!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} `));
