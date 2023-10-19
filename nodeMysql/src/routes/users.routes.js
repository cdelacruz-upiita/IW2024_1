import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/users.controllers.js"

const router = Router();

router.get("/users", getAllUsers);
router.get("/users:email",getUser);
  
export default router;

