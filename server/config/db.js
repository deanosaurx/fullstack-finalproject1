import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose.connect(process.env.DB_URI, {}).then((res) => {
    const db = res.connection;
    console.log(`Mongo is connected on host ${db.host}`);
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {});
  });
};
