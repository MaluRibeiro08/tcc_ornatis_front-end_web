"use strict"

import {imagemPreview} from '../../../../utils/imagem.js';
import { listarDetalhesFuncionario, listarFuncionarios, salvarDadosFuncionario, deletarFuncionario} from "./funcionarios.js";


const id_empresa = 1;
const url_imagem = 'http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/'

const tratarUploadImagem = ({target}) =>
{
    const img_foto_perfil = document.getElementById("img_funcionario")
    imagemPreview(target.id, img_foto_perfil.id);
}

const criar_card_funcionario = (elemento) =>
{
    const container_mae = document.querySelector(".container_listagem_funcionarios")
    const novoCard = document.createElement("div")

    novoCard.classList.add("container_funcionario")
    novoCard.id = `card_${elemento.id_funcionario}`

    novoCard.innerHTML = 
    `
        <div class="container_foto_funcionario">
            <img class="foto_funcionario" src="${url_imagem+elemento.foto_perfil}" alt="">
        </div>

        <div class="container_informacoes_funcionario">
            <h2 class="nome_funcionario">${elemento.nome_funcionario}</h2>
            <div class="container_acoes_funcionario">
                <span class="material-symbols-outlined botao_acao"  name="btn_editar" id="btn_editar_${elemento.id_funcionario}">edit</span>
                <span class="material-symbols-outlined botao_acao"  name="btn_deletar" id="btn_deletar_${elemento.id_funcionario}">delete</span>
            </div>
        </div>
    `
    container_mae.appendChild(novoCard)
    // console.log(novoCard)
    // console.log(elemento)
}

const criarListaFuncionarios = async (id_empresa) =>
{
    const dados = await listarFuncionarios(id_empresa);

    if(dados == null || dados.length == 0)
    {
        return console.log("nenhum funcionario")
    }

    document.querySelector(".container_aviso_sem_funcionario").style.display = "none";
    dados.map((elemento) =>
    {
        criar_card_funcionario(elemento)
    })

    const arr_botoes_editar =  document.getElementsByName("btn_editar");
    let contador_editar = 0;
    while (contador_editar < arr_botoes_editar.length) 
    {
        console.log(contador_editar);
        const elemento = arr_botoes_editar[contador_editar];

        elemento.addEventListener("click", (evento)=>
        {
            tratar_click_botao_card_funcionario(evento.target)
        })
        contador_editar = contador_editar+1
    }

    const arr_botoes_deletar =  document.getElementsByName("btn_deletar");
    let contador_deletar = 0;
    while (contador_deletar < arr_botoes_deletar.length) 
    {
        console.log(contador_deletar);
        const elemento = arr_botoes_deletar[contador_deletar];

        elemento.addEventListener("click", (evento)=>
        {
            tratar_click_botao_card_funcionario(evento.target)
        })
        contador_deletar = contador_deletar+1
    }
    
}

criarListaFuncionarios(id_empresa)

const fecharModal = () =>
{
    document.getElementById(`modal_exclusao`).style.display = 'none';
    document.getElementById(`modal_edicao`).style.display = 'none';
    document.getElementById("container_modais").style.display = "none";
}

const abrirModalExclusao = (id_alvo) =>
{
    document.getElementById(`modal_exclusao`).style.display = 'flex';
    document.getElementById("container_modais").style.display = "flex";

    const input_id_funcionario = document.getElementById("id_funcionario_excluir");
    input_id_funcionario.value = pegarIdFuncionario(id_alvo);
}

const abrirModalEdicao = async (id_alvo) =>
{
    //PEGANDO ID FUNCIONARIO
        const id_funcionario = pegarIdFuncionario(id_alvo);
        console.log(id_funcionario)
    
    //FAZENDO A BUSCA PELOS DADOS DOS FUNCIONÁRIOS
        const dadosFuncionario = await listarDetalhesFuncionario(id_funcionario);
        console.log(dadosFuncionario);
    //COLOCANDO OS DADOS NOS CAMPOS DO MODAL
        const input_imagem_funcionario = document.getElementById('img_funcionario');
        const input_nome_funcionario = document.getElementById('input_nome_funcioanrio');
        const input_cod_funcionario = document.getElementById('input_cod_funcioanrio');
        const input_id_funcionario = document.getElementById('input_id_funcionario_editado');
        const input_form_id_funcionario = document.getElementById('input_id_funcionario_form');
        
        input_imagem_funcionario.src = `${url_imagem}${dadosFuncionario.data.dados_funcionario[0].foto_perfil}`
        input_nome_funcionario.value = dadosFuncionario.data.dados_funcionario[0].nome_funcionario;
        input_cod_funcionario.value = dadosFuncionario.data.dados_funcionario[0].cod_funcionario;
        input_id_funcionario.value = id_funcionario;
        input_form_id_funcionario.value = id_funcionario;

        let dia_semana_contador = 1;
        while(dia_semana_contador <= 7)
        {
            if(dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador] != null)
            {
                const input_dia_semana = document.getElementById(`input_dia_semana${dia_semana_contador}`)
                input_dia_semana.checked = true

                const container_dia_semana = document.getElementById(`container_horarios_dia${dia_semana_contador}`)
                container_dia_semana.style.display = 'flex';

                if(dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][0]!= null)
                {
                    // console.log(dadosFuncionario.data.dados_dias_trabalho[1][1])

                    const primeiro_input_hora_inicio = document.getElementById(`1input_hora_inicio${dia_semana_contador}`)
                    primeiro_input_hora_inicio.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][0].hora_inicio
                    const primeiro_input_hora_termino = document.getElementById(`1input_hora_termino${dia_semana_contador}`)
                    primeiro_input_hora_termino.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][0].hora_termino
                }
                if(dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][1]!= null)
                {
                    // console.log(`entrou`)
                    const segundo_input_hora_inicio = document.getElementById(`2input_hora_inicio${dia_semana_contador}`)
                    segundo_input_hora_inicio.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][1].hora_inicio
                    const segundo_input_hora_termino = document.getElementById(`2input_hora_termino${dia_semana_contador}`)
                    segundo_input_hora_termino.value = dadosFuncionario.data.dados_dias_trabalho[dia_semana_contador][1].hora_termino
                }
                else
                {
                    console.log("só um horário nesse dia")
                }
            }

            dia_semana_contador = dia_semana_contador+1;
        }        


    //FAZENDO O MODAL APARECER
        document.getElementById(`modal_edicao`).style.display = 'flex';
        document.getElementById("container_modais").style.display = "flex";
}

const pegarIdFuncionario = (id_alvo) => 
{
    const ultimo_underline = id_alvo.lastIndexOf("_")
    const ultimoCaracter = id_alvo.length

    return id_alvo.substring(ultimo_underline+1,ultimoCaracter)
}

const tratar_click_botao_card_funcionario = (alvo) =>
{
    // const presenca_editar = alvo.id.indexOf("editar") != -1;
    // const presenca_deletar = alvo.id.indexOf("deletar") != -1;

    if(alvo.id.indexOf("editar") != -1)
    {
        console.log("vamos editar");
        abrirModalEdicao(alvo.id);
        // document.getElementById(`modal_edicao`).style.display = 'flex';
        // document.getElementById("container_modais").style.display = "flex";
    }
    else if (alvo.id.indexOf("deletar") != -1)
    {
        console.log("vamos excluir")
        abrirModalExclusao(alvo.id);
    }

}

// EVENTOSSS
    document.getElementById("fechar_modal_edicao").addEventListener("click", () =>
    {
        fecharModal()
    })

    document.getElementById("botao_salvar_edicao").addEventListener('click', () =>
    {
        salvarDadosFuncionario(id_empresa);
    })

    document.getElementById("botao_nao_exclusao_funcionario").addEventListener('click', fecharModal)

    document.getElementById("botao_sim_exclusao_funcionario").addEventListener('click', (evento)=>
    {
        // const id_funcionario = pegarIdFuncionario(evento.target.id)

        const id_funcionario = document.getElementById("id_funcionario_excluir").value;

        // console.log(id_funcionario);
        deletarFuncionario(id_funcionario)
        fecharModal()
        document.getElementById(`card_${id_funcionario}`).style.display = "none"
    })

    document.getElementById("input_foto_funcionario").addEventListener("change", (tratarUploadImagem))

