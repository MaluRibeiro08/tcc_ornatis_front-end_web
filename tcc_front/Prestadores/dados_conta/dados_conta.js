"use strict"

import { imagemPreview } from "../../utils/imagem.js";

//CONTAINERS   
    const container_perfil_estabelecimento = document.getElementById('container_secao_perfil_estabelecimento');
    const container_perfil_administrador = document.getElementById('container_secao_perfil_administrador');
    const container_localizacao = document.getElementById('container_secao_dados_localizacao');
    const container_recebimento = document.getElementById('container_secao_recebimento');
    const container_login = document.getElementById('container_secao_dados_login');

//LINKS
    const link_perfil_estabelecimento = document.getElementById('link_perfil_estabelecimento');
    const link_perfil_administrador = document.getElementById('link_perfil_administrador');
    const link_localizacao = document.getElementById('link_localizacao');
    const link_recebimento = document.getElementById('link_recebimento');
    const link_regra_negocio = document.getElementById('link_regra_negocio');    
    const link_funcionamento = document.getElementById('link_funcionamento');
    const link_dados_login = document.getElementById('link_dados_login');

//CAMPOS
    const input_nome_estabelecimento = document.querySelector("#input_nome_negocio");
    const input_cnpj = document.querySelector("#input_cnpj");
    const input_contato = document.querySelector("#input_contato");
    const input_biografia = document.querySelector("#input_biografia");
    const input_nome_adm = document.querySelector("#input_nome_adm");
    const input_data_nascimento = document.querySelector("#input_data_nascimento");
    const input_cpf = document.querySelector("#input_cpf");
    const input_cep = document.querySelector("#input_cep");
    const input_bairro = document.querySelector("#input_bairro");
    const input_cidade = document.querySelector("#input_cidade");
    const input_rua = document.querySelector("#input_rua");
    const input_numero = document.querySelector("#input_numero");
    const input_complemento = document.querySelector("#input_complemento");
    const input_estado = document.querySelector("#input_estado");
    const input_email = document.querySelector("#input_email");
    const input_senha = document.querySelector("#input_senha");
    const input_imagem = document.querySelector("#input_foto_estabelecimento")
    const img_foto_perfil = document.querySelector("#img_estabelecimento")

    const carregarDadosConta =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarDadosConta`)

    const preencherCampos = async (id_empresa) =>
    {
        const response = await carregarDadosConta(id_empresa);
        // console.log(response)
        const informacoes = await response.json();
        console.log(informacoes)
        console.log(informacoes.data.dados_empresa[0]["nome_fantasia"])

        input_nome_estabelecimento.value = informacoes.data.dados_empresa[0]["nome_fantasia"]; 
        input_cnpj.value = informacoes.data.dados_empresa[0]["cnpj"]; 
        input_contato.value = informacoes.data.dados_empresa[0]["telefone"]; 
        input_biografia.value = informacoes.data.dados_empresa[0]["biografia"]; 
        input_nome_adm.value = informacoes.data.dados_administrador[0]["nome_adm"]; 
        input_data_nascimento.value = informacoes.data.dados_administrador[0]["data_nascimento"];
        input_cpf.value = informacoes.data.dados_administrador[0]["cpf"];
        input_cep.value = informacoes.data.dados_endereco_empresa[0]["cep"];
        input_bairro.value = informacoes.data.dados_endereco_empresa[0]["bairro"];
        input_cidade.value = informacoes.data.dados_endereco_empresa[0]["nome_cidade"];
        input_rua.value = informacoes.data.dados_endereco_empresa[0]["rua"];
        input_numero.value = informacoes.data.dados_endereco_empresa[0]["numero"];
        input_complemento.value = informacoes.data.dados_endereco_empresa[0]["complemento"];
        input_estado.value = informacoes.data.dados_endereco_empresa[0]["nome_estado"];
        input_email.value = informacoes.data.dados_login[0]["email_adm"];
        input_senha.value = informacoes.data.dados_login[0]["senha_adm"];
        

    }
    preencherCampos(1);

    const settarDisplayInvisivel = (elemento) => elemento.style.display = "none"
    const tirarClasseElemento = (elemento) => elemento.classList.remove("aberto_visualizacao")
    
    const invisibilizarSecoes = () =>
    {
        const arrSecoes = [container_perfil_estabelecimento, container_perfil_administrador, container_localizacao, container_recebimento, container_login];
        const $resultado = arrSecoes.map(settarDisplayInvisivel);
    }
    const descolorirLinks = (target) =>
    {
        const arrLinks = [link_perfil_estabelecimento, link_perfil_administrador, link_localizacao, link_recebimento, link_regra_negocio, link_funcionamento, link_dados_login];
        const $resultado = arrLinks.map(tirarClasseElemento);
        // console.log(target);
        target.classList.add("aberto_visualizacao")
    }

    const trocarVisualizacaoSecoes = (alvo) =>
    {
        invisibilizarSecoes();
        alvo.style.display = "flex";
    }

    const tratarUploadImagem = ({target}) =>
    {
        imagemPreview(target.id, img_foto_perfil.id);
    }
    

// ***** EVENTOS ******

    link_perfil_estabelecimento.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_perfil_estabelecimento);
        descolorirLinks(link_perfil_estabelecimento);
    });
    link_perfil_administrador.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_perfil_administrador);
        descolorirLinks(link_perfil_administrador);
    });
    link_localizacao.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_localizacao);
        descolorirLinks(link_localizacao);
    });
    link_recebimento.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_recebimento);
        descolorirLinks(link_recebimento);
    });
    // link_regra_negocio.addEventListener("click", ()=>{
    //     trocarVisualizacaoSecoes(container_regra_negocio);
    //     descolorirLinks(link_regra_negocio);
    // });
    // link_funcionamento.addEventListener("click", ()=>{
    //     trocarVisualizacaoSecoes(container_funcionamento);
    //  descolorirLinks(link_funcionamento);
    // });
    link_dados_login.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_login);
        descolorirLinks(link_dados_login);
    });

    input_imagem.addEventListener("change", tratarUploadImagem)
