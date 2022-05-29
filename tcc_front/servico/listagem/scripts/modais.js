"use strict"

import {imagemPreview} from '../../../utils/imagem.js';
import { getDetalhesServico } from './servico.js';
import { setarDadosServicoCampos } from './manipulacao_campos_servico.js';
// import { listarDetalhesFuncionario, listarFuncionarios, salvarDadosFuncionario, deletarFuncionario} from "./funcionarios.js";


const id_empresa = 1;
const url_imagem = 'http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/'

const tratarUploadImagem = ({target}) =>
{
    const img_foto_perfil = document.getElementById("img_funcionario")
    imagemPreview(target.id, img_foto_perfil.id);
}

const fecharModal = () =>
{
    document.getElementById(`modal_exclusao`).style.display = 'none';
    document.getElementById(`modal_edicao`).style.display = 'none';
    document.getElementById("container_modais").style.display = "none";
}

const abrirModalExclusao = (id_servico) =>
{
    console.log("vamos excluir o servico" + id_servico)
    document.getElementById(`modal_exclusao`).style.display = 'flex';
    document.getElementById("container_modais").style.display = "flex";

    const input_id_servico = document.getElementById("id_servico_excluir");
    input_id_servico.value = id_servico;
}

const abrirModalEdicao = async (id_servico) =>
{
    console.log("vamos editar o servico " + id_servico)

    // //FAZENDO A BUSCA PELOS DADOS DOS SERVIÇOS
        const dadosServico = await getDetalhesServico(id_servico);
        console.log(dadosServico["dados_servico"][0]["nome_servico"]);

    //SETTANDO OS DADOS EM SEUS CAMPOS
        setarDadosServicoCampos(dadosServico);

    //FAZENDO O MODAL APARECER
        document.getElementById(`modal_edicao`).style.display = 'flex';
        document.getElementById("container_modais").style.display = "flex";
}


export {abrirModalEdicao, abrirModalExclusao, fecharModal, tratarUploadImagem}