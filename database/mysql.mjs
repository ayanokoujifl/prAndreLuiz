import { Sequelize } from "sequelize";

const conexao = new Sequelize({
  host: 'dpg-cte103ilqhvc73db7ufg-a',
  port: '5432',
  database: "sistemahotel_7r4l",
  username: "root",
  password: "root",
  dialect: 'postgres',
});

const tryConnectSequelize = async () => {
  try {
    await conexao.authenticate();
    await conexao.sync({ logging: false });
    return console.log("Conexão bem-sucedida");
  } catch (error) {
    return console.error("Erro de conexão: ", error);
  }
};

export { tryConnectSequelize, conexao };
