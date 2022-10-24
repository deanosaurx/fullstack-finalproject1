import express from "express";
import { createUser, getUsers } from "../controllers/users.js";

const router = express.Router();

router.route("/users").get(getUsers);
router.route("/user").post(createUser);
export default router;
