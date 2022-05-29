"use strict"

import {imagemPreview} from '../../../utils/imagem.js';
import { excluirServico } from './servico.js';
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
    //PEGANDO ID SERVICO
    
    // //FAZENDO A BUSCA PELOS DADOS DOS FUNCIONÁRIOS
    //     const dadosFuncionario = await listarDetalhesFuncionario(id_funcionario);
    //     console.log(dadosFuncionario);
    // //COLOCANDO OS DADOS NOS CAMPOS DO MODAL
    //     const input_imagem_funcionario = document.getElementById('img_funcionario');
    //     const input_nome_funcionario = document.getElementById('input_nome_funcioanrio');
    //     const input_cod_funcionario = document.getElementById('input_cod_funcioanrio');
    //     const input_id_funcionario = document.getElementById('input_id_funcionario_editado');
    //     const input_form_id_funcionario = document.getElementById('input_id_funcionario_form');
        
    //     input_imagem_funcionario.src = `${url_imagem}${dadosFuncionario.data.dados_funcionario[0].foto_perfil}`
    //     input_nome_funcionario.value = dadosFuncionario.data.dados_funcionario[0].nome_funcionario;
    //     input_cod_funcionario.value = dadosFuncionario.data.dados_funcionario[0].cod_funcionario;
    //     input_id_funcionario.value = id_funcionario;
    //     input_form_id_funcionario.value = id_funcionario;

    //     let dia_semana_contador = 1;
    //     while(dia_semana_contador <= 7)
    //     {
    //         if(dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador] != null)
    //         {
    //             const input_dia_semana = document.getElementById(`input_dia_semana${dia_semana_contador}`)
    //             input_dia_semana.checked = true

    //             const container_dia_semana = document.getElementById(`container_horarios_dia${dia_semana_contador}`)
    //             container_dia_semana.style.display = 'flex';

    //             if(dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][0]!= null)
    //             {
    //                 // console.log(dadosFuncionario.data.dados_dias_trabalho[1][1])

    //                 const primeiro_input_hora_inicio = document.getElementById(`1input_hora_inicio${dia_semana_contador}`)
    //                 primeiro_input_hora_inicio.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][0].hora_inicio
    //                 const primeiro_input_hora_termino = document.getElementById(`1input_hora_termino${dia_semana_contador}`)
    //                 primeiro_input_hora_termino.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][0].hora_termino
    //             }
    //             if(dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][1]!= null)
    //             {
    //                 // console.log(`entrou`)
    //                 const segundo_input_hora_inicio = document.getElementById(`2input_hora_inicio${dia_semana_contador}`)
    //                 segundo_input_hora_inicio.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][1].hora_inicio
    //                 const segundo_input_hora_termino = document.getElementById(`2input_hora_termino${dia_semana_contador}`)
    //                 segundo_input_hora_termino.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][1].hora_termino
    //             }
    //             else
    //             {
    //                 console.log("só um horário nesse dia")
    //             }
    //         }

    //         dia_semana_contador = dia_semana_contador+1;
    //     }        


    //FAZENDO O MODAL APARECER
        document.getElementById(`modal_edicao`).style.display = 'flex';
        document.getElementById("container_modais").style.display = "flex";
}


// EVENTOSSS
    document.getElementById("fechar_modal_edicao").addEventListener("click", () =>
    {
        fecharModal()
    })

    // document.getElementById("botao_salvar_edicao").addEventListener('click', () =>
    // {
    //     salvarDadosFuncionario(id_empresa);
    // })

    document.getElementById("botao_nao_exclusao_servico").addEventListener('click', fecharModal)

    document.getElementById("botao_sim_exclusao_servico").addEventListener('click', (evento)=>
    {
        const id_servico = document.getElementById("id_servico_excluir").value;
        document.getElementById(`id_servico${id_servico}`).style.display = "none"
        excluirServico(id_servico).then(fecharModal)
    })

    // document.getElementById("input_foto_funcionario").addEventListener("change", (tratarUploadImagem))

export {abrirModalEdicao, abrirModalExclusao}