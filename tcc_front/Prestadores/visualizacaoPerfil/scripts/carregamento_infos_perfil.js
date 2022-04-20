"use strict"
// const carregarDadosPerfil =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarDadosConta`)

const carregarDadosPerfil =   (id_empresa) => fetch(`http://10.107.144.24/ornatis/api-ornatis/rotas/contaAdministradora/?id_empresa=${25}&acao=carregarPerfil`)


const preencherCamposPerfil = async (id_empresa) =>
{
    let response = await carregarDadosPerfil();
    const informacoes = await response.json();
    console.log(informacoes)


    console.log("você chegou a função que carregará os dados!!x")
    //NOME DO SALÃO
    document.getElementById("lblTitulo").innerText = informacoes.data.dados_empresa[0]["nome_fantasia"];
    document.getElementById("p_biografia").innerText = "Texto da Maria";

    //ENDERECO
    //TRATAR INFORMAÇÕES DA API PRA COLOCAR TUDO EM UMA UNICA STRING
    const rua = "Rua Angelina";
    const numero_rua = "18";
    const cidade = "Carapicuíba";
    const sigla_estado = "SP";
    const cep = "06380-030"
    const endereco_completo = rua + ', '+ numero_rua + '. ' + cidade + ', '+ sigla_estado + ' - ' + cep;
    document.getElementById("p_endereco").innerText = endereco_completo;

    //REDES SOCIAIS
    document.getElementById("p_rede_insta").innerText = "@insta_salao";
    document.getElementById("p_rede_facebook").innerText = "@face_salao"

    // input_nome_estabelecimento.value = informacoes.data.dados_empresa[0]["nome_fantasia"]; 
    // input_cnpj.value = informacoes.data.dados_empresa[0]["cnpj"]; 
    // input_contato.value = informacoes.data.dados_empresa[0]["telefone"]; 
    // input_biografia.value = informacoes.data.dados_empresa[0]["biografia"]; 
    // input_nome_adm.value = informacoes.data.dados_administrador[0]["nome_adm"]; 
    // input_data_nascimento.value = informacoes.data.dados_administrador[0]["data_nascimento"];
    // input_cpf.value = informacoes.data.dados_administrador[0]["cpf"];
    // input_cep.value = informacoes.data.dados_endereco_empresa[0]["cep"];
    // input_bairro.value = informacoes.data.dados_endereco_empresa[0]["bairro"];
    // input_cidade.value = informacoes.data.dados_endereco_empresa[0]["nome_cidade"];
    // input_rua.value = informacoes.data.dados_endereco_empresa[0]["rua"];
    // input_numero.value = informacoes.data.dados_endereco_empresa[0]["numero"];
    // input_complemento.value = informacoes.data.dados_endereco_empresa[0]["complemento"];
    // input_estado.value = informacoes.data.dados_endereco_empresa[0]["sigla_estado"];
    // input_email.value = informacoes.data.dados_login[0]["email_adm"];
    // input_senha.value = informacoes.data.dados_login[0]["senha_adm"];

    // //INFORMACOES PAGAMENTO
    //     const arr_formas_recebidas = informacoes.data.dados_pagamento;
    //     // console.log(arr_formas_recebidas);

    //     let contador = 0;

    //     if(arr_formas_recebidas == "Nenhuma forma de pagamento encontrada")
    //     {
    //         alert("Cadastre uma forma de recebimento!")
    //     }
    //     else
    //     {
    //         while (contador <=5) 
    //         {
                
    //             if(arr_formas_recebidas["formas_aceitas"][contador] != null)
    //             {
    //                 const elemento = document.getElementById(`input_forma_pagamento${contador}`)
    //                 elemento.checked = true
    //             }
    //             contador = contador+1
    //         }
    //     }
        

    //     input_observacoes_pagamento.value = informacoes.data.dados_pagamento.observacoes_pagamento

    // //INFORMACOES PAGAMENTO
    //     if(informacoes.data.taxa_cancelamento_empresa == null)
    //     {
    //         radio_nao_regra_cancelmento.checked = true
    //         radio_nao_regra_cancelmento.addEventListener("click", ()=>{
    //             fecharContainer("container_geral_regras");
    //         })
    //     }
    //     else
    //     {
    //         radio_sim_regra_cancelmento.checked = true;
    //         abrirContainer("container_geral_regras");
            
    //         if(informacoes.data.taxa_cancelamento_empresa.taxa_unica_cancelamento != null)
    //         {
    //             radio_taxa_unica.checked = true;
    //             abrirContainer("container_taxa_unica");

    //             input_valor_taxa_unica.value = informacoes.data.taxa_cancelamento_empresa.taxa_unica_cancelamento
    //         }
    //         else
    //         {
    //             radio_taxa_variada.checked = true;

    //             abrirContainer("container_regras_cancelamentos");
    //             // abrirContainer("icone_adicao_regra");

    //             informacoes.data.taxa_cancelamento_empresa.map((elemento)=>
    //             {
    //                 // teste(elemento)
    //                 criarRegraCancelamento
    //                 (
    //                     elemento["valor_acima_de_100"],
    //                     elemento["horas_tolerancia"],
    //                     elemento["porcentagem_sobre_valor_servico"]
    //                 )
    //             })
                
    //         }
    //     }

    // //INFORMAÇÕES FUNCIONAMENTO
    
    // if(informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"] != null && 
    //     informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"] != 0 )
    // { 
    //     radio_sim_intervalo.checked = true;
    //     abrirContainer("container_valor_intervalo");
    //     const input_intervalo_padrao = document.getElementById("input_intervalo_padrao")
    //     input_intervalo_padrao.value = informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"]
    //     // console.log(informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"])
    // }
    // else
    // {
    //     radio_nao_intervalo.checked = true;
    // }

    // let dia_semana_contador = 1;
    // while(dia_semana_contador <= 7)
    // {
    //     if(informacoes.data.dados_funcionamento[dia_semana_contador] != null)
    //     {
    //         const input_dia_semana = document.getElementById(`input_dia_semana${dia_semana_contador}`)
    //         input_dia_semana.checked = true

    //         if(informacoes.data.dados_funcionamento[dia_semana_contador][0]!= null)
    //         {
    //             // console.log(informacoes.data.dados_funcionamento[1][1])

    //             const primeiro_input_hora_inicio = document.getElementById(`1input_hora_inicio${dia_semana_contador}`)
    //             primeiro_input_hora_inicio.value = informacoes.data.dados_funcionamento[dia_semana_contador][0].hora_inicio
    //             const primeiro_input_hora_termino = document.getElementById(`1input_hora_termino${dia_semana_contador}`)
    //             primeiro_input_hora_termino.value = informacoes.data.dados_funcionamento[dia_semana_contador][0].hora_termino
    //         }
    //         if(informacoes.data.dados_funcionamento[dia_semana_contador][1]!= null)
    //         {
    //             // console.log(`entrou`)
    //             const segundo_input_hora_inicio = document.getElementById(`2input_hora_inicio${dia_semana_contador}`)
    //             segundo_input_hora_inicio.value = informacoes.data.dados_funcionamento[dia_semana_contador][1].hora_inicio
    //             const segundo_input_hora_termino = document.getElementById(`2input_hora_termino${dia_semana_contador}`)
    //             segundo_input_hora_termino.value = informacoes.data.dados_funcionamento[dia_semana_contador][1].hora_termino
    //         }
    //         else
    //         {
    //             console.log("só um horário nesse dia")
    //         }
    //     }
    //     dia_semana_contador = dia_semana_contador+1;
    // }        

}

export {preencherCamposPerfil}