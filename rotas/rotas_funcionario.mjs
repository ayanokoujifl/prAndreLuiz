import { Router } from "express"
import {
  novo,
  todos,
  um,
  altera,
  exclui,
} from "../controles/controle_funcionarios.mjs"

const rotas_funcionarios = Router()

rotas_funcionarios.post("/cadastrar", novo) // /cadastrar
rotas_funcionarios.get("/listar", todos) // /listar
rotas_funcionarios.get("/listar/:id", um) // /listar
rotas_funcionarios.put("/editar", altera) // /editar
rotas_funcionarios.delete("/deletar/:id", exclui) // /excluir

export default rotas_funcionarios
