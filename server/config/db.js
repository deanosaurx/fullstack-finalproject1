import mongoose from "mongoose";

export const dbConnect = () =>
  mongoose
    .connect(process.env.DB_URI, {})
    .then((response) => console.log(response.connection.host))
    .catch((error) => console.log(error));
