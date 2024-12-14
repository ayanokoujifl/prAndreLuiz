import { altera, buscaUm, exclui, getLista, novo } from "./acessa_dados.js";

async function salvar() {
    const iptNome = document.getElementById('nome');
    const iptIdade = document.getElementById('idade');
    const iptCPF = document.getElementById('CPF');
    const iptEmail = document.getElementById('email');

    const obj = {
        "nome": iptNome.value,
        "idade": iptIdade.value,
        "CPF": iptCPF.value,
        "email": iptEmail.value
    };

    console.log("Salvando novo registro:", obj);
    await novo(obj);
    document.forms[0].reset();
    desenhaTabela();
}

async function editar() {
    const iptId = document.getElementById('id');
    const iptNome = document.getElementById('nome');
    const iptIdade = document.getElementById('idade');
    const iptCPF = document.getElementById('CPF');
    const iptEmail= document.getElementById('email');

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "idade": iptIdade.value,
        "CPF": iptCPF.value,
        "email": iptEmail.value
    };
    console.log("Editando cliente:", obj);
    await altera(obj);
    document.forms[0].reset();
    desenhaTabela();
}

function decideSalvarEditar(event) { 
    event.preventDefault();
    if(document.getElementById('id').value){
        editar();
    } else {
        salvar();
    }
}

async function excluir(event) {
    const id = event.target.getAttribute('data-id');
    console.log("Excluindo funcionário com id:", id);
    await exclui(id);
    desenhaTabela();
}

async function preencheDadosParaEdicao(event) {
    const id = event.target.getAttribute('data-id');
    const funcionario = await buscaUm(id);
    document.getElementById('id').value = funcionario.id;
    document.getElementById('nome').value = funcionario.nome;
    document.getElementById('idade').value = funcionario.idade;
    document.getElementById('CPF').value = funcionario.CPF;
    document.getElementById('email').value = funcionario.email;
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
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
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
        td3.innerText = dados[i].CPF;
        td4.innerText = dados[i].email;
        td5.append(btEd, btEx);

        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
    }
}

const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);

window.addEventListener('load', desenhaTabela);