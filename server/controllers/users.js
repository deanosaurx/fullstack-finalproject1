import User from "../models/UsersDB/User.js";

export const getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });

  next();
};

export const createUser = async (req, res, next) => {
  console.log(req.body);
  const user = await User.create(req.body);
  res.status(201).json({ success: true, user });
  next();
};
