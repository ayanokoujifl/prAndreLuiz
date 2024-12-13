import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Funcionario = conexao.define("Funcionario", {
  nome: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER
  }});

 Funcionario.sync(); 

export default Funcionario;
