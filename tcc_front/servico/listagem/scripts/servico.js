const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/'

const getServicosPorEmpresa = async (id_empresa) =>
{
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?id_empresa=${id_empresa}&acao=listarServicosPorEmpresa`);

    const informacoes = await response.json();
    
    return informacoes.data;
}

const getDetalhesServico = async (id_servico) =>
{
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?id_servico=${id_servico}&acao=listarDetalhesServico`);

    const informacoes = await response.json();
    
    return informacoes.data;
}

const setarDisponibilidadeServico = async (id_servico) =>
{

    const data = {};
    data['acao'] = 'setarDisponibilidadeServico';
    data ['id_servico'] = id_servico;
    data ['ativo_para_uso'] = document.getElementById(`check_servico_${id_servico}`).checked ? 1 : 0;

    const options_servico = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
    };

    fetch(url, options_servico).then(response => response.json()).then(
        data => 
        {
            console.log("Imprimindo response")
            console.log(data)
            console.log("Especificando impressao response")
            console.log(data.data)
        }
    )
    //.then
    // (
    //     () =>
    //     {
    //         console.log("enviando formulario adm"),
                    
    //         document.getElementById("formulario_imagem").submit()
    //     }
    // ).then
    
}


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

const excluirServico = async (id_servico) =>
{
    console.log("vamos apagar o servico " + id_servico)

    const data = {};
    data["acao"] = 'desabilitarServico';
    data["id_servico"] = id_servico;

    const options =
    {
        method : 'DELETE',
        body: JSON.stringify(data), //transforma o produto que era JSON em String, serializa
        headers: 
        {
            'content-type' : 'application/json'
        }
    }

    console.log(options);
    fetch(url, options).then(response => response.json()).then(data => {
    console.log(data)})

}

const salvarServico = (data) =>
{
    console.log("vamos salvar o serviço cujos dados são:")
    console.log(data)


    const options_servico = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options_servico).then(response => response.json()).then(
        data => 
        {
            console.log("Imprimindo response")
            console.log(data)
            console.log("Especificando impressao response")
            console.log(data.data)
        }
    ).then
    (
        () =>
        {
            console.log("Tudo certo")
            alert("Serviço cadastrado com sucesso!!")
            location.reload()
        }
    );
}
export {getServicosPorEmpresa, getDetalhesServico, setarDisponibilidadeServico, getEspecialidades, getParteCorpoPorEspecialidade, getPartesCorpo, excluirServico, salvarServico}