import Quarto from "../modelos/quarto.mjs";

async function novo(req, res) {
  try {
    const criado = await Quarto.create({
      numero: req.body.numero,
      bloco: req.body.bloco,
      idcliente: req.body.idcliente,
      descricao: req.body.descricao
    });

    res.json(criado);
  } catch (e) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar quarto" });
  }
}

async function um(req, res) {
  const qua = await Quarto.findOne({
    where: { id: req.params.id },
  });

  res.json(qua);
}

async function todos(req, res) {
  const todos = await Quarto.findAll();

  res.json(todos);
}

async function altera(req, res) {
  const qua = await Quarto.findOne({
    where: { id: req.body.id },
  });

  qua.numero = req.body.numero;

  qua.salario= req.body.salario;

  await qua.save();

  res.json(qua);
}

async function exclui(req, res) {
  const qua = await Quarto.findOne({
    where: { id: req.params.id },
  });

  await qua.destroy();

  res.json(qua);
}

export { novo, todos, um, altera, exclui };
