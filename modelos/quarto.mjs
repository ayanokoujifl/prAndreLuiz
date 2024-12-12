import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Quarto = conexao.define("Quarto", {
  numero: {
    type: DataTypes.STRING,
  },
  bloco: {
    type: DataTypes.INTEGER
  },
  idcliente: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.STRING
  },
});

export default Quarto;
