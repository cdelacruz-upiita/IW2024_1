import { Router } from "express";

const router = Router();

router.get("/",(req, res)=>{
  res.send('ruta principal del proyecto');      
});

export default router; 