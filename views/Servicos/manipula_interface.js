import { getLista, novo } from "./acessa_dados_servicos.js";

let indiceSelecionado = -1;

window.onload = () => {
  desenhaTabela();
}

async function cadastrarUsuario(usuario) {
  const API_URL = "https://prandreluiz.onrender.com/servicos/cadastrar"; //endpoint da api 
  console.log(usuario);

  try {
    
    const resposta = await fetch(API_URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(usuario), 
    });

    if (!resposta.ok) {
      
      throw new Error(
        `Erro ao cadastrar usuário: ${resposta.status} - ${resposta.statusText}`
      );
    }

    const dados = await resposta.json(); 
    console.log("Usuário cadastrado com sucesso:", dados); 
  } catch (erro) {
    console.error("Erro na requisição:", erro.message); 
  }
}

async function salvar(event) {
  event.preventDefault();
  const iptTipo = document.getElementById("tipo");
  const iptHorario = document.getElementById("horario");
  const iptValor = document.getElementById("valor");
  const iptDuracao = document.getElementById("duracao");

  const obj = {
    tipo: iptTipo.value,
    horario: iptHorario.value,
    valor: iptValor.value,
    duracao: iptDuracao.value
  };

  const dados = getLista();

  if (indiceSelecionado === -1) {
    await cadastrarUsuario(obj); 
    novo(obj);
  } else {
    dados[indiceSelecionado] = obj;
    indiceSelecionado = -1;
  }

  desenhaTabela();
  limparCampos();
}

async function desenhaTabela() {
  const tbody = document.getElementById("tbody1");
  const dados = await fetch("https://prandreluiz.onrender.com/servicos/cadastrar").then((res) => res.json());
  tbody.innerHTML = "";
  for (let i = 0; i < dados.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const btnEditar = document.createElement("button");

    td1.innerText = dados[i].tipo;
    td2.innerText = dados[i].horario;
    td3.innerText = dados[i].valor;
    td4.innerText = dados[i].duracao;

    btnEditar.innerText = "Editar";
    btnEditar.classList.add("edit-button");
    btnEditar.addEventListener("click", () => editar(i));
    td5.appendChild(btnEditar);
    td5.style = "border: none";
    tr.append(td1, td2, td3, td4, td5);

    tr.addEventListener("click", () => selecionarLinha(i));

    if (i === indiceSelecionado) {
      tr.style.backgroundColor = "#ADD8E6";
    }

    tbody.append(tr);
  }
}

function selecionarLinha(indice) {
  indiceSelecionado = indice;
  desenhaTabela();
}

function editar(indice) {
  const dados = getLista();
  const cliente = dados[indice];
  document.getElementById("tipo").value = servico.tipo;
  document.getElementById("horario").value = servico.horario;
  document.getElementById("valor").value = servico.valor;
  document.getElementById("duracao").value = servico.duracao;
  indiceSelecionado = indice;
}

function excluir(event) {
  event.preventDefault();
  if (indiceSelecionado > -1) {
    const dados = getLista();
    dados.splice(indiceSelecionado, 1);
    indiceSelecionado = -1;
    desenhaTabela();
  } else {
    alert("Selecione o servico que deseja excluir da base de dados.");
  }
}

function limparTabela(event) {
  event.preventDefault();
  const tbody = document.getElementById("tbody1");
  tbody.innerHTML = "";
  const dados = getLista();
  dados.splice(0, dados.length);
}

function limparCampos() {
  document.getElementById("tipo").value = "";
  document.getElementById("horario").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("duracao").value = "";
}

const btSalvar = document.getElementById("btSalvar");
btSalvar.addEventListener("click", salvar);

const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparTabela);

const btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", excluir);
