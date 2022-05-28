"use strict"

import {imagemPreview} from '../../../utils/imagem.js';


const tratarUploadImagem = (id_elemento, id_alvo) =>
{
    const img_foto_perfil = document.getElementById("id_elemento")
    imagemPreview(id_alvo, id_elemento);
}


const fecharModal = () =>
{
    document.getElementById(`modal_criacao`).style.display = 'none';
    document.getElementById(`modal_cadastro_imagem_salao`).style.display = 'none';
    document.getElementById(`container_modal_cadastro_servico`).style.display = 'none';
    document.getElementById("container_modais").style.display = "none";
}

const abrirModal = (flag) =>
{
    if(flag == "cadastrar_funcionario")
    {
        document.getElementById(`modal_criacao`).style.display = 'flex';
        document.getElementById("container_modais").style.display = "flex";
    }
    else if(flag == "cadastrar_imagem_salao")
    {
        document.getElementById(`modal_cadastro_imagem_salao`).style.display = 'flex';
        document.getElementById("container_modais").style.display = "flex";
    }
    else if (flag == "cadastrar_servico")
    {

        document.getElementById(`container_modal_cadastro_servico`).style.display = 'flex';
        document.getElementById(`container_modais`).style.display = 'flex';
    }
    
}

export {tratarUploadImagem, fecharModal, abrirModal}
    


