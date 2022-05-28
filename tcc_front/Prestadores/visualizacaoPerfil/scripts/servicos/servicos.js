"use strict"

const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/'

const getServicosPorEmpresa = async (id_empresa) =>
{
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?id_empresa=${id_empresa}&acao=listarServicosPorEmpresa`);

    const informacoes = await response.json();
    
    return informacoes.data;

}


export {getServicosPorEmpresa}