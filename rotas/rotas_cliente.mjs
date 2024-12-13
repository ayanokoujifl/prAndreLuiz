import { Router } from "express";
import {novo, todos, um, altera, exclui} from "../controles/controle_clientes.mjs";

const rotas_clientes = Router();

rotas_clientes.post("/cadastrar", novo); // /cadastrar
rotas_clientes.get("/listar", todos); // /listar
rotas_clientes.put("/editar", altera); // /editar
rotas_clientes.delete("/excluir/:id", exclui); // /excluir

export default rotas_clientes;
