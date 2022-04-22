"use strict"


const radio_sim_regra_cancelmento = document.getElementById('input_radio_sim_cancelamento')
const radio_nao_regra_cancelmento = document.getElementById('input_radio_nao_cancelamento')

const radio_sim_intervalo = document.getElementById('input_radio_sim_intervalo')
const radio_nao_intervalo = document.getElementById('input_radio_nao_intervalo')

const radio_taxa_unica = document.getElementById('input_radio_taxa_unica')
const radio_taxa_variada = document.getElementById('input_radio_variada')

const icone_adicao_regra = document.getElementById('icone_adicao_regra')

const getDadosPagamento = () =>
{
    let id_forma_pagamento = 1
    let arr_ids_formas_aceitas = [];

    while (id_forma_pagamento < 6)
    {
        const check_forma_pagamento = document.getElementById(`input_forma_pagamento${id_forma_pagamento}`)

        if (check_forma_pagamento.checked == true)
        {
            arr_ids_formas_aceitas.push(id_forma_pagamento)
        }
        id_forma_pagamento = id_forma_pagamento+1
    }
    return arr_ids_formas_aceitas;
}

const getDadosRegrasNegocio = () =>
{
    let arr_taxas_cancelamento = [];
    const quantidade_regras = document.getElementById("container_regras_cancelamentos").childElementCount
    let contador = 1;
    while (contador <= quantidade_regras) 
    {
        const acima_cem = verificarCheck(`input_radio_acima_cem_regra${contador}`) ? 1 : 0
        const tempo_tolerancia = document.getElementById(`input_tempo_tolerancia_regra${contador}`).value
        const porcentagem_cobrada  = document.getElementById(`input_valor_taxa_variada_regra${contador}`).value

        const regra_negocio = 
        {
            "valor_acima_de_100" : acima_cem,
            "porcentagem_sobre_valor_servico" : porcentagem_cobrada,
            "horas_tolerancia" : tempo_tolerancia
        }
        arr_taxas_cancelamento.push(regra_negocio)

        contador = contador+1
    }
    return arr_taxas_cancelamento
}

const verificarCheck = (id_elemento) =>  document.getElementById(`${id_elemento}`).checked

const getFuncionamento = (id_empresa) =>
{
    let dia_semana_contador = 1;
    let arr_dados_funcionamento = [];

    while(dia_semana_contador <= 7)
    {
        if(verificarCheck(`input_dia_semana${dia_semana_contador}`))
        {
            if(document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value != null &&
                document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value != '')
            {
                // console.log(dia_semana_contador + "tem 1° horário")
                // console.log(document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value)
                

                const hora_inicio = document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value;
                const hora_termino = document.getElementById(`1input_hora_termino${dia_semana_contador}`).value;
                console.log( hora_inicio + '   |   ' + hora_termino)
                arr_dados_funcionamento.push(
                    {
                        "id_dia_semana" : dia_semana_contador,
                        "hora_inicio" : `${hora_inicio}`,
                        "hora_termino" : `${hora_termino}`
                    }
                )
            }
            if(document.getElementById(`2input_hora_inicio${dia_semana_contador}`).value != null &&
                document.getElementById(`2input_hora_inicio${dia_semana_contador}`).value != '')
            {
                const hora_inicio = document.getElementById(`2input_hora_inicio${dia_semana_contador}`).value;
                const hora_termino = document.getElementById(`2input_hora_termino${dia_semana_contador}`).value;
                arr_dados_funcionamento.push(
                    {
                        "id_dia_semana" : dia_semana_contador,
                        "hora_inicio" : `${hora_inicio}`,
                        "hora_termino" : `${hora_termino}`
                    }
                )
            }
            else
            {
                console.log("sem_horario")
            }
        }
        dia_semana_contador = dia_semana_contador+1;
    } 

    return arr_dados_funcionamento;
}

export {getDadosPagamento, getDadosRegrasNegocio, getFuncionamento}