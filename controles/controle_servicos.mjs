import Servico from "../modelos/servico.mjs";

async function novo(req, res) {
  try {
    const criado = await Servico.create({
      tipo: req.body.tipo,
      horario: req.body.horario,
      valor: req.body.valor,
      duracao: req.body.duracao
    });

    res.json(criado);
  } catch (e) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar servico" });
  }
}

async function um(req, res) {
  const ser = await Servico.findOne({
    where: { id: req.params.id },
  });

  res.json(ser);
}

async function todos(req, res) {
  const todos = await Servico.findAll();

  res.json(todos);
}

async function altera(req, res) {
  const ser = await Servico.findOne({
    where: { id: req.body.id },
  });

  ser.tipo = req.body.tipo;

  ser.horario= req.body.horario;

  await ser.save();

  res.json(ser);
}

async function exclui(req, res) {
  const ser = await Servico.findOne({
    where: { id: req.params.id },
  });

  await ser.destroy();

  res.json(ser);
}

export { novo, todos, um, altera, exclui };
