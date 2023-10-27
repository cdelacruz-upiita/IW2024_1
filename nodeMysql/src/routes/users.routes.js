import { Router } from "express";
import { getAllUsers, login } from "../controllers/users.controllers.js"

const router = Router();

router.get("/users", getAllUsers);
router.post("/login", login);  
export default router;

