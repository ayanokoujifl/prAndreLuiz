import { conexao } from "../database/mysql.mjs";
import Cliente from "./cliente.mjs";
import Funcionario from "./funcionario.mjs";
import Quarto from "./quarto.mjs";
import Servico from "./servico.mjs";

conexao.sync();

export default conexao;
