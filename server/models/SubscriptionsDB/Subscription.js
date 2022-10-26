import mongoose from "mongoose";

const subscriptionsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [4, "username must be at least 4 characters"],
    maxLength: 15,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters"],
  },
});

const SubscriptionsDB = mongoose.connection.useDb("SubscriptionsDB");

const Subscription = SubscriptionsDB.model("subscription", subscriptionsSchema);

export default Subscription;
