  import { DataTypes } from "sequelize";
  import conexao from "../database/mysql.mjs";

  const Cliente = conexao.define("Cliente", {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
  });

  Cliente.sync();

  //export default { Cliente, Funcionario };

  export default Cliente();

