import User from "../models/UsersDB/User.js";

export const getUsers = (req, res, next) => {
  const user = User.find()
    .then((res) => console.log(res))
    .finally(console.log(user));
  next();
};

export const createUser = async (req, res, next) => {
  console.log(req.body);
  const user = await User.create(req.body);
  res.status(201).json({ success: true, user });
  next();
};
