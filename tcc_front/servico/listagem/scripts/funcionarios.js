const carregarFuncionarios =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)

const listarFuncionarios = async (id_empresa) =>
{
    const response = await carregarFuncionarios(id_empresa);
    const informacoes = await response.json();
    
    return informacoes;
}


export { listarFuncionarios}