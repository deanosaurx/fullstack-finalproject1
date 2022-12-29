import User from "../models/UsersDB/User.js";

export const getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });

  next();
};

export const createUser = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, user });
  next();
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ success: false, reason: "No such user" });
    }
    user.password = req.body.password;
    user.age = req.body.age;
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error });
  }
};
