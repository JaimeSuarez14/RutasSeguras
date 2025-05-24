import {Router} from "express";

const router = Router();

router.get("/users", (req, res) => {
    res.send("Obteniendo Usuarios!");
})

router.get("/users/:id", (req, res) => {
    const{id}=req.params;
    res.send("Obteniendo el usuario "+id);
})

router.post("/users", (req, res) => {
    res.send("Creando Usuarios!");
})

router.delete("/users/:id", (req, res) => {
    res.send("Eliminando Usuarios!");
})

router.put("/users/:id", (req, res) => {
    res.send("Actualizando Usuarios!");
})

export default router;