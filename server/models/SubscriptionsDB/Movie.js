import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
  },
  premired: {
    type: Date,
  },
});

const SubscriptionsDB = mongoose.connection.useDb("SubscriptionsDB");

const Movie = SubscriptionsDB.model("movie", movieSchema);

export default Movie;
