import { Router } from "express";
import {
  novo,
  todos,
  um,
  altera,
  exclui,
} from "../controles/controle_servicos.mjs";

const rotas_servicos = Router();


// Test para ver se a API esta funcionando
//http://localhost:8000/servico/
rotas_servicos.get("/", (req, res) => {
  res.status(200).json(true);
});

//http://localhost:8000/servico/...

rotas_servicos.post("/cadastrar", novo); // /cadastrar
rotas_servicos.get("/listar", todos); // /listar
rotas_servicos.put("/editar", altera); // /editar
rotas_servicos.delete("/excluir/:id", exclui); // /excluir

export default rotas_servicos;
