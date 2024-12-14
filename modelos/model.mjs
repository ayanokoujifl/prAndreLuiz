  import { DataTypes } from "sequelize";
  import conexao from "../database/mysql.mjs";

  const Cliente = conexao.define("Cliente", {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    CPF: DataTypes.STRING,
    email: DataTypes.STRING
  });

  const Funcionario = conexao.define("Funcionario", {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    CPF: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Cliente.sync({ force: false });  // N recria tables
  Funcionario.sync({ force: false });

  export { Cliente, Funcionario };

  // export default Cliente;


