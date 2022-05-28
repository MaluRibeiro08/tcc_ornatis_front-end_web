"use strict"

const getEspecialidades = async (id_empresa) =>
{

    //buscando no banco
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?id_empresa=${id_empresa}&acao=listarEspecialidades`);
    const informacoes = await response.json();
    
    return informacoes.data;
}

const getParteCorpoPorEspecialidade = async (id_empresa, id_especilaidade) =>
{
    //buscando no banco
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?id_empresa=${id_empresa}&id_especialidade=${id_especilaidade}&acao=listarEspecialidadePartesCorpo`);
    const informacoes = await response.json();
    
    return informacoes.data;
}

const getPartesCorpo = async () => 
{
    //buscando no banco
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?acao=listarPartesCorpo`);
    const informacoes = await response.json();
    
    return informacoes.data;
}

export {getEspecialidades, getParteCorpoPorEspecialidade, getPartesCorpo}