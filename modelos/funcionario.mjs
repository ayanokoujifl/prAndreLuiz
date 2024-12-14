import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Funcionario = conexao.define("Funcionario", {
  nome: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER
  },
  CPF: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  }});

 Funcionario.sync(); 

export default Funcionario;
