import { tbFuncionarios } from "./base_temporaria.js";
import urlBackEnd from "/constantes/urls.mjs";

async function getLista() {
    const resposta = await fetch(urlBackEnd + '/funcionarios/listar');
    const funcionarios = await resposta.json();
    return funcionarios;
}

async function buscaUm(id) {
    const resposta = await fetch(urlBackEnd + '/funcionarios/listar/' + id);
    const funcionario = await resposta.json();
    return funcionario;
}

async function novo(obj) {
    const opt = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch(urlBackEnd + '/funcionarios/cadastrar', opt);
    const cadastrado = await resposta.json();
    return cadastrado;
}

async function altera(obj) {
    const opt = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    const resposta = await fetch(urlBackEnd + '/funcionarios/editar', opt);
    const editado = await resposta.json();
    return editado;
}

async function exclui(id) {
    const opt = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    };
    const resposta = await fetch(urlBackEnd + '/funcionarios/deletar'+ id, opt);
    const apagado = await resposta.json();
    return apagado;
}

export { getLista, buscaUm, novo, altera, exclui };