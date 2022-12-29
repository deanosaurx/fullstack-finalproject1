import express from "express";
import { createMovie } from "../controllers/movies.js";
import { createUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();

router.route("/users").get(getUsers);
router.route("/user").post(createUser);
router.route("/movie").post(createMovie);
router.route("/:id").put(updateUser);

export default router;
