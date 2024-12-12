import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Servico = conexao.define("Servico", {
  tipo: {
    type: DataTypes.STRING,
  },
  horario: {
    type: DataTypes.INTEGER
  },
  valor: {
    type: DataTypes.STRING
  },
  duracao: {
    type: DataTypes.STRING
  },
});

export default Servico;
