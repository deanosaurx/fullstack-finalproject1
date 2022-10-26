import Movie from "../models/SubscriptionsDB/Movie.js";

// export const getUsers = (req, res, next) => {
//   const user = User.find()
//     .then((res) => console.log(res))
//     .finally(console.log(user));
//   next();
// };

export const createMovie = async (req, res, next) => {
  console.log(req.body);
  const movie = await Movie.create(req.body);
  res.status(201).json({ success: true, movie });
  next();
};
