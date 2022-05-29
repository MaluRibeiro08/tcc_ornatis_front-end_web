"use strict"

import { carregarInformacoesPerfil, carregarRedesSociais, updateRedesSociais, carregarFuncionariosSalao } from "./manipulacao_dados_perfil.js"
import {abrirModal, fecharModal, tratarUploadImagem } from "./modais.js";
import { salvarDadosFuncionario } from "./funcionarios.js";
import { mudarVisualizacaoSecao } from "./navegacao_secoes.js";
import { listarServicosSalao} from "./servicos/listagem_servicos.js";
import { construirTelaCadastro, limparCamposCadastroServico } from "./servicos/cadastro/preenchimento_modal_cadastro.js";

const id_empresa = 1;
const url_imagem_salao = "http://localhost/tcc_ornatis_back-end/api-ornatis/upload/imagem_perfil_salao/";
const url_imagem_espaco_estabelecimento = "http://localhost/tcc_ornatis_back-end/api-ornatis/upload/imagem_espaco_estabelecimento/";
const url_imagem_funcionario = "http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/";

let servicos_carregados = false;

const preencherAbaInicio = async (id_empresa) =>
{
    //BUSCANDO INFORMACOES
        const response = await carregarInformacoesPerfil(id_empresa);

        const informacoes = await response.json();
        console.log(informacoes);

    //SETTANDO INFORMACOES

        //EMPRESA 
            const dados_empresa = informacoes.data.dados_empresa[0];
            const dados_endereco = informacoes.data.dados_endereco_empresa[0];
            const dados_funcionamento = informacoes.data["dados_funcionamento"]

            document.getElementById("nome-estabelecimento").innerText = dados_empresa["nome_fantasia"];
            document.getElementById("foto_perfil_salao").src = url_imagem_salao + dados_empresa["imagem_perfil"];
            document.getElementById("campo_biografia").innerText = dados_empresa["biografia"];

        //IMAGENS ESPAÇO SALÃO
            const fotos_estabelecimento = informacoes.data.imagens_estabelecimento;
            console.log(fotos_estabelecimento)
            preencherImagensSalao(fotos_estabelecimento);

        //ENDERECO
            const rua = dados_endereco['rua'];
            const numero = dados_endereco['numero'];
            const bairro = dados_endereco['bairro'];
            const nome_cidade = dados_endereco['nome_cidade'];
            const sigla_estado = dados_endereco['sigla_estado'];
            const cep = dados_endereco['cep'];

            const endereco_salao = `${rua}, ${numero}. ${bairro} - ${nome_cidade}/${sigla_estado}. ${cep}`            
            document.getElementById("campo_endereco_empresa").innerText = endereco_salao;

        //REDES SOCIAIS
            preencherRedesSociais(dados_empresa["link_facebook"], dados_empresa["nome_usuario_instagram"]);
                
        //FUNCIONAMENTO
            preencherFuncionamento(dados_funcionamento);

        //FUNCIONARIOS
            await preencherFuncionarios(id_empresa);

        //FORMAS PAGAMENTO
            const arr_formas_recebidas = informacoes.data.dados_pagamento;
            console.log(arr_formas_recebidas);

            let contador = 0;

            if(arr_formas_recebidas == "Nenhuma forma de pagamento encontrada")
            {
                alert("Cadastre uma forma de recebimento!")
            }
            else
            {
                while (contador <=5) 
                {
                    
                    if(arr_formas_recebidas["formas_aceitas"][contador] != null)
                    {
                        const elemento = document.querySelector(`.forma_pagamento${contador}`)
                        elemento.style.display = "flex"
                    }
                    contador = contador+1
                }
            }

        //REGRAS DE NEGÓCIO
            preencherRegrasCancelamento(informacoes.data.taxa_cancelamento_empresa)


}

const preencherImagensSalao = (fotos_estabelecimento) =>
{
    if(fotos_estabelecimento == "Nenhuma imagem de estabelecimento encontrada")
    {

    }
    else
    {
        document.querySelector(".container_aviso_falta_foto").style.display = "none";
        document.querySelector(".container_carrossel").style.display = "flex";

        console.log(fotos_estabelecimento)
        fotos_estabelecimento.map((elemento)=>
            {
                criarElementoImagemCarrossel
                (
                    elemento["imagem_salao"]
                )
            })
    }
}

const criarElementoImagemCarrossel = (link_imagem) =>
{
    console.log(link_imagem)
    const container_mae = document.querySelector(".container_imagens_carrossel");

    const novoItemCarrossel = document.createElement("div") 

    novoItemCarrossel.classList.add("container_imagem_carrossel")

    novoItemCarrossel.innerHTML = 
    `
        <img src="${url_imagem_espaco_estabelecimento}${link_imagem}" alt="" class="imagem_carrossel">
        <span class="material-symbols-outlined icone_delecao_imagem">delete</span>
    `

    container_mae.appendChild(novoItemCarrossel);
}
const preencherRegrasCancelamento = (dadosCancelamento) =>
{
    if(dadosCancelamento == null)
    { }
    else
    {
        

        
        if(dadosCancelamento.taxa_unica_cancelamento != null)
        {
            document.querySelector(".texto_taxa").innerHTML = `Cobra-se R$<strong>${dadosCancelamento.taxa_unica_cancelamento}</strong> por cancelamento!`;
            document.querySelector(".icone_taxa_nula_unica").innerText = "attach_money";
        }
        else
        {
            document.querySelector(".taxa_unica_nula").style.display = "none";
            document.querySelector(".regras_variadas").style.display = "flex";

            dadosCancelamento.map((elemento)=>
            {
                // teste(elemento)
                criarElementoRegraCancelamento
                (
                    elemento["valor_acima_de_100"],
                    elemento["horas_tolerancia"],
                    elemento["porcentagem_sobre_valor_servico"]
                )
            })
            
        }
    }
}

const criarElementoRegraCancelamento = (acimaCem, tolerancia, taxa) =>
{
    const novaRegra = document.createElement("div") 

    novaRegra.classList.add("container_regra")

    novaRegra.innerHTML = 
    `
        <div class="container_valor_taxa">
            <p class="valor_taxa">${taxa} %</p>
        </div>

        <div class="separador_taxa">
             
        </div>
        
        <div class="container_antecedencia">
            <p class="antecedencia">${tolerancia} horas</p>
        </div>      
    `
    if(acimaCem == 1)
    {
        document.getElementById("container_regras_acima_cem").appendChild(novaRegra)
        document.querySelector(".container_regras_acima_cem").style.display = "flex"
    }
    else
    {
        document.getElementById("container_regras_abaixo_cem").appendChild(novaRegra)
        document.querySelector(".container_regras_abaixo_cem").style.display = "flex"

    }
}

const preencherFuncionarios = async (id_empresa) =>
{
    const response = await carregarFuncionariosSalao(id_empresa);

    const informacoes = await response.json();

    const dados = informacoes.data;

    console.log(dados)

    if(dados.length != 0)
    {
        dados.map((funcionario) =>
        {
            criar_card_funcionario(funcionario)
        });
    }
    else
    {
        document.getElementById("container_aviso_sem_funcionarios").style.display = "flex";
        document.getElementById("container_funcionarios").style.display = "none";
    }
    
}

const criar_card_funcionario = (funcionario) =>
{
    const container_mae = document.getElementById("container_funcionarios")
    const novoCard = document.createElement("div")

    novoCard.classList.add("card_funcionario")

    novoCard.innerHTML = 
    `
        <div class="container_img_funcionario">
            <img src="${url_imagem_funcionario}${funcionario["foto_perfil"]}" alt="Foto Funcionario">
        </div>
        <div class="container_nome_funcionario">
            <p>${funcionario["nome_funcionario"]}</p>
        </div>
    `
    container_mae.appendChild(novoCard)
    // console.log(novoCard)
    // console.log(elemento)
}

const preencherFuncionamento = (dadosFuncionamento) =>
{
    let dia_semana_contador = 1;
    while(dia_semana_contador <= 7)
    {
        if(dadosFuncionamento[dia_semana_contador] != null)
        {
            const circulo_dia = document.getElementById(`circulo_dia_${dia_semana_contador}`)
            circulo_dia.classList.add("dia_semana_funciona");
            circulo_dia.classList.remove("circulo_dia_nao_funciona")


            if(dadosFuncionamento[dia_semana_contador][0]!= null)
            {
                // console.log(dadosFuncionamento[1][1])

                const primeiro_container_horario_inicio = document.getElementById(`1container_horario_inicio_${dia_semana_contador}`)
                primeiro_container_horario_inicio.innerText = dadosFuncionamento[dia_semana_contador][0].hora_inicio.substr(0, 5)
                const primeiro_container_horario_temino = document.getElementById(`1container_horario_temino_${dia_semana_contador}`)
                primeiro_container_horario_temino.innerText = dadosFuncionamento[dia_semana_contador][0].hora_termino.substr(0, 5)
            }
            if(dadosFuncionamento[dia_semana_contador][1]!= null)
            {
                // console.log(`entrou`)
                const segundo_container_horario_inicio = document.getElementById(`2container_horario_inicio_${dia_semana_contador}`)
                segundo_container_horario_inicio.innerText = dadosFuncionamento[dia_semana_contador][1].hora_inicio.substr(0, 5)
                const segundo_container_horario_temino = document.getElementById(`2container_horario_temino_${dia_semana_contador}`)
                segundo_container_horario_temino.innerText = dadosFuncionamento[dia_semana_contador][1].hora_termino.substr(0, 5)
            }
            else
            {
                console.log("só um horário nesse dia")
            }
        }
        dia_semana_contador = dia_semana_contador+1;
    }    

    console.log("Chegou!")
}

const preencherRedesSociais = (facebook, instagram) =>
{
    const campo_visualizacao_facebook = document.getElementById("campo_visualizacao_rede_facebook");
    const campo_edicao_facebook = document.getElementById("campo_edicao_rede_facebook");

    const campo_visualizacao_instagram = document.getElementById("campo_visualizacao_rede_instagram");
    const campo_edicao_instagram = document.getElementById("campo_edicao_rede_instagram");

    if (facebook != null && facebook != '')
    {
        campo_edicao_facebook.value = facebook;

        campo_visualizacao_facebook.href = facebook;
        campo_visualizacao_facebook.innerText = "Ver perfil no Facebook"
        campo_visualizacao_facebook.style.pointerEvents = "all";

        // console.log("tem info face")
    }
    else
    {
        campo_edicao_facebook.value = '';

        campo_visualizacao_facebook.href = '';
        campo_visualizacao_facebook.innerText = "Não cadastrado"
        campo_visualizacao_facebook.style.pointerEvents = "none";

        
    }
    if (instagram != null  && instagram != '')
    {
        campo_edicao_instagram.value = instagram;

        const nome_usuario_sem_arroba = instagram.replace('@', '');

        const link_perfil_instagram = "https://www.instagram.com/" + nome_usuario_sem_arroba + "/";

        campo_visualizacao_instagram.href = link_perfil_instagram;
        campo_visualizacao_instagram.innerText = "Ver perfil no instagram";
        campo_visualizacao_instagram.style.pointerEvents = "all";
        
        // console.log("tem info face")
    }
    else
    {
        campo_edicao_instagram.value = '';

        const nome_usuario_sem_arroba = '';

        campo_visualizacao_instagram.href = '';
        campo_visualizacao_instagram.innerText = "Não cadastrado"
        campo_visualizacao_instagram.style.pointerEvents = "none";
    }

    campo_edicao_facebook.style.display = "none";
    campo_visualizacao_facebook.style.display = "flex"
    campo_edicao_instagram.style.display = "none";
    campo_visualizacao_instagram.style.display = "flex"
}

const habilitarEdicaoRedeSocial = (redeSocialASerEditada) =>
{

    const campo_edicao_rede = document.getElementById(`campo_edicao_rede_${redeSocialASerEditada}`);
    const campo_visualizacao_rede = document.getElementById(`campo_visualizacao_rede_${redeSocialASerEditada}`);

    campo_edicao_rede.style.display = "flex";
    campo_visualizacao_rede.style.display = "none";

}



const substituirIconeRedesSociais = (iconeASerSubstituido, elementoPaiIcone) =>
{
    if(iconeASerSubstituido == "salvar")
    {
        elementoPaiIcone.classList.remove("salvar");
        elementoPaiIcone.classList.add("editar");
        elementoPaiIcone.innerText = "edit"
    }
    if(iconeASerSubstituido == "editar")
    {
        elementoPaiIcone.classList.remove("editar");
        elementoPaiIcone.classList.add("salvar");
        elementoPaiIcone.innerText = "done"
    }
}

const salvarAlteracaoRedeSocial = () =>
{
    const input_facebook = document.getElementById("campo_edicao_rede_facebook");
    const input_instagram = document.getElementById("campo_edicao_rede_instagram");

    const facebook = input_facebook.value;
    const instagram = input_instagram.value;

    updateRedesSociais(id_empresa, facebook, instagram)
    .then(
        async data =>
        {
            // console.log(data);
            const response = await carregarRedesSociais(id_empresa);
            const informacoes = await response.json();
            console.log(informacoes);

            const facebook = informacoes.data[0]["link_facebook"];
            const instagram = informacoes.data[0]["nome_usuario_instagram"]

            // console.log(facebook + instagram)

            preencherRedesSociais(facebook, instagram)

        }
    )

    
}



// CHAMANDO AS FUNCOES
preencherAbaInicio(id_empresa);

//EVENTOS
document.getElementById("btn_editar_facebook").addEventListener("click", (evento)=>
{
    console.log("teste")
    if(evento.target.classList.contains("editar"))
    {
        // console.log("vamos abrir edicao e preparar pra salvar")

        substituirIconeRedesSociais('editar', evento.target)
        habilitarEdicaoRedeSocial("facebook");
    }
    else if(evento.target.classList.contains("salvar"))
    {
        
        // console.log("vamos salvar e fechar edicao")
        substituirIconeRedesSociais('salvar', evento.target)
        salvarAlteracaoRedeSocial()
    }

})

document.getElementById("btn_editar_instagram").addEventListener("click", (evento)=>
{
    console.log("teste")
    if(evento.target.classList.contains("editar"))
    {
        substituirIconeRedesSociais('editar', evento.target)
        habilitarEdicaoRedeSocial("instagram");
    }
    else if(evento.target.classList.contains("salvar"))
    {
        substituirIconeRedesSociais('salvar', evento.target)
        salvarAlteracaoRedeSocial()
    }

})

document.querySelector(".container_funcionarios").addEventListener("click", () =>
{
    window.open('../funcionarios/listagem/listagem_funcionarios.html', '_blank');
})

document.querySelector(".container_icone_adicao_funcionario").addEventListener("click", (evento) =>
{
    if (evento.target == document.querySelector(".container_icone_adicao_funcionario"))
    {
        window.open('../funcionarios/listagem/listagem_funcionarios.html', '_blank');
    }
})

document.querySelector(".circulo_icone_adicao").addEventListener("click", () =>
{
    abrirModal("cadastrar_funcionario");
})

document.querySelector(".icone_add_servico").addEventListener("click", () =>
{
    abrirModal("cadastrar_servico");
    construirTelaCadastro(id_empresa);
    
})

document.getElementById("fechar_modal_cadastro_servico").addEventListener("click", () =>
{
    fecharModal()
    limparCamposCadastroServico()
})

document.getElementById("fechar_modal_criacao").addEventListener("click", () =>
{
    fecharModal()
})

document.getElementById("fechar_modal_cadastro_imagem").addEventListener("click", () =>
{
    fecharModal()
})

document.getElementById("botao_salvar_criacao").addEventListener('click', () =>
{
    salvarDadosFuncionario(id_empresa);
})

document.getElementById("input_foto_funcionario").addEventListener("change", (evento)=>
{
    tratarUploadImagem("img_funcionario", evento.target.id)
})

document.getElementById("input_foto_salao").addEventListener("change", (evento) => 
{
    tratarUploadImagem("img_salao", evento.target.id)
})


document.querySelector(".container_botao_adicionar_foto_salao").addEventListener("click", () =>
{
    abrirModal("cadastrar_imagem_salao")
} )

const arr = Array.prototype.slice.call(document.getElementsByClassName("container_link_navegacao"));
arr.map((elemento)=>
    {
        elemento.addEventListener("click", () =>
        {
            if(elemento.id == "link_servicos" && servicos_carregados == false)
            {
                listarServicosSalao(id_empresa)
                servicos_carregados = true;
            }
            mudarVisualizacaoSecao(elemento)
        })

    }
)