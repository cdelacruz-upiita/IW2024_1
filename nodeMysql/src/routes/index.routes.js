import { Router } from "express";

const router = Router();

router.get("/",(req, res)=>{  
    res.render('index', {titulo: 'Aplicación web con express y HBS'})  
});

export default router; 