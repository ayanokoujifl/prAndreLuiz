import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Cliente = conexao.define("Cliente", {
  nome: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER
  }});

 Cliente.sync(); 

export default Cliente;
