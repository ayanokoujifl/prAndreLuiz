import express from "express";
import conexao from "./modelos/sync.mjs";
import { tryConnectSequelize } from "./database/mysql.mjs";
import rotas_clientes from "./rotas/rotas_cliente.mjs";

  const app = express();

  app.use(express.json());

  app.use("/clientes", rotas_clientes);

  app.use(express.static("views"));

  app.listen(80, '127.0.0.1', function () {
    console.log('Na escuta.');
});

  // app.listen(8000, function () {
  //   tryConnectSequelize();
  //   console.log("Escutando");
  // });
