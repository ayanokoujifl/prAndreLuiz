import express from "express";
import conexao from "./modelos/sync.mjs";
import rotas_clientes from "./rotas/rotas_cliente.mjs";
import { tryConnectSequelize } from "./database/mysql.mjs";
import rotas_funcionarios from "./rotas/rotas_funcionario.mjs";
import rotas_quartos from "./rotas/rotas_quarto.mjs";
import rotas_servicos from "./rotas/rotas_servico.mjs"

  const app = express();

  app.use(express.json());

  app.use("/clientes", rotas_clientes);
  app.use("/funcionarios", rotas_funcionarios);
  app.use("/quartos", rotas_quartos);
  app.use("/servicos", rotas_servicos);

  app.use(express.static("views"));

  app.listen(8000, function () {
    tryConnectSequelize();
    console.log("Escutando");
  });
