import express, { json } from "express";
import routes from "./routes.js";
import db from "./db.js";

const app= express();

db.sync(console.log(" banco sincronizado"));

app.use(json());

app.use(routes);

app.listen(1313, console.log("Servidor Rodando")); 