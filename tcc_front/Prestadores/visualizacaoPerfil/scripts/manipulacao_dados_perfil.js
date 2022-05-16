"use strict"

const url = "http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/contaAdministradora/";

const carregarFuncionariosSalao =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)

const carregarInformacoesPerfil =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarPerfil`)

const carregarRedesSociais = (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarRedesSociais`)

const updateRedesSociais = async (id_empresa, facebook, instagram) =>
{
    const data = {};

    data['id_empresa'] = id_empresa;
    data['acao'] = "updateRedesSociais";
    data['link_facebook'] = facebook;
    data['nome_usuario_instagram'] = instagram;


    const options =
    {
        method : 'POST',
        body: JSON.stringify(data), //transforma o produto que era JSON em String, serializa
        headers: 
        {
            'content-type' : 'application/json'
        }
    }

    await fetch(url, options)
    .then
    (
        response => response.json()
    )
    .then
    (
        data => 
        {
            console.log(data)
        }
    )
    return "Alteração salva com sucesso!";
    // document.formulario_imagem.submit();
    // alert("Alterações salvar com sucesso!")

}

export {carregarInformacoesPerfil, carregarRedesSociais, updateRedesSociais, carregarFuncionariosSalao}