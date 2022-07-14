import express from "express";
import usuarios from "./controllers/usuario.js";

const routes = express.Router();

routes.get("/usuarios", usuarios.findAll );

routes.post("/usuarios",usuarios.criarUsuario);

routes.delete("/usuarios/:id", usuarios.usuarioDeletado );

routes.get("/usuarios/:id", usuarios.BuscaUsuario);

export default routes;