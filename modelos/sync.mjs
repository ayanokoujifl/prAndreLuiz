import { conexao } from "../database/mysql.mjs";
import Cliente from "./cliente.mjs";

conexao.sync();

export default conexao;
