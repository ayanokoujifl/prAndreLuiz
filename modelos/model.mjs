  import { DataTypes } from "sequelize";
  import conexao from "../database/mysql.mjs";

  const Cliente = conexao.define("Cliente", {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
  });

  const Funcionario = conexao.define("Funcionario", {
    nome: DataTypes.STRING,
    salario: DataTypes.INTEGER,
  });

  const Quarto = conexao.define("Quarto", {
    numero: DataTypes.STRING,
    bloco: DataTypes.INTEGER,
  });

  const Servico = conexao.define("Servico", {
    tipo: DataTypes.STRING,
    horario: DataTypes.INTEGER,
  });

  Cliente.sync();
  Funcionario.sync();
  Quarto.sync();
  Servico.sync();

  //export default { Cliente, Funcionario };

  export default Cliente();

