import { altera, buscaUm, exclui, getLista, novo } from "./acessa_dados.js";

async function salvar() {
    const iptNome = document.getElementById('nome');
    const iptIdade = document.getElementById('idade');
    const obj = {
        "nome": iptNome.value,
        "idade": iptIdade.value
    };
    await novo(obj);
    document.forms[0].reset();
    desenhaTabela();
}

async function editar() {
    const iptId = document.getElementById('id');
    const iptNome = document.getElementById('nome');
    const iptIdade = document.getElementById('idade');
    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "idade": iptIdade.value
    };
    await altera(obj);
    document.forms[0].reset();
    desenhaTabela();
}

function decideSalvarEditar(event) { // manipulaSalvar
    event.preventDefault();
    if(document.getElementById('id').value){
        editar();
    } else {
        salvar();
    }
}

async function excluir(event) {
    const id = event.target.getAttribute('data-id');
    await exclui(id);
    desenhaTabela();
}

async function preencheDadosParaEdicao(event) {
    const id = event.target.getAttribute('data-id');
    const funcionario = await buscaUm(id);
    document.getElementById('id').value = funcionario.id;
    document.getElementById('nome').value = funcionario.nome;
    document.getElementById('idade').value = funcionario.idade;
}

async function desenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getLista();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        const btEd = document.createElement('button');
        const btEx = document.createElement('button');
        
        btEd.innerText = 'Editar';
        btEd.setAttribute('data-id', dados[i].id);
        btEd.addEventListener('click', preencheDadosParaEdicao);

        btEx.innerText = 'Excluir';
        btEx.setAttribute('data-id', dados[i].id);
        btEx.addEventListener('click', excluir);

        td1.innerText = dados[i].nome;
        td2.innerText = dados[i].idade;
        td3.append(btEd, btEx);

        tr.append(td1, td2, td3);
        tbody.append(tr);
    }
}

const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);

window.addEventListener('load', desenhaTabela);