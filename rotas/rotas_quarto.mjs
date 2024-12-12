import { Router } from "express";
import {
  novo,
  todos,
  um,
  altera,
  exclui,
} from "../controles/controle_quartos.mjs";

const rotas_quartos = Router();


// Test para ver se a API esta funcionando
//http://localhost:8000/quartos/
rotas_quartos.get("/", (req, res) => {
  res.status(200).json(true);
});

//http://localhost:8000/quartos/...

rotas_quartos.post("/cadastrar", novo); // /cadastrar
rotas_quartos.get("/listar", todos); // /listar
rotas_quartos.put("/editar", altera); // /editar
rotas_quartos.delete("/excluir/:id", exclui); // /excluir

export default rotas_quartos;
