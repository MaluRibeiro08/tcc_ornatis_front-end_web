"use strict";

const preencherFormularioEndereco = async () => {

    const cep = document.getElementById("input_cep").value.replace("-", "");

    if (validarCep(cep)) {
        const endereco = await pesquisarCep(cep);
        // console.log(endereco);

        document.getElementById("input_rua").value = endereco.logradouro;
        document.getElementById("input_bairro").value = endereco.bairro;
        document.getElementById("input_cidade").value = endereco.localidade;
        document.getElementById("id_cidade").value = endereco.ibge;
        document.getElementById("input_estado").value = endereco.uf;
    } else {
        limparFormulario();
        document.getElementById("input_rua").value = "CEP inválido";
    }
};

const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const responseSevidor = await fetch(url); // fetch faz requisições e traz uma resposta do servidor
    const endereco = await responseSevidor.json(); //ptiramos da resposta apenas o json de dados
    return endereco;
};

const limparFormulario = () => {
    document.getElementById("input_bairro").value = "";
    document.getElementById("id_cidade").value = "";
    document.getElementById("input_cidade").value = "";
    document.getElementById("input_estado").value = "";
};

const validarCep = (cep) => /^[0-9]{8}$/.test(cep);
//testa se o CEP recebido tem 8 caracteres que estão entre 0 e 9 desde o começo ^ ao final $.

export {preencherFormularioEndereco}