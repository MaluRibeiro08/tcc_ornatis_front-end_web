"use strict"

const carregarDetalhesFuncionario =   (id_funcionario) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_funcionario=${id_funcionario}&acao=listarDetalhesFuncionario`)
    
const preencherCampos = async (id_funcionario) =>
{
    const response = await carregarDetalhesFuncionario(id_funcionario);
    console.log(response)
    const informacoes = await response.json();
    console.log(informacoes)
    // console.log(informacoes.data.dados_empresa[0]["nome_fantasia"])

    document.getElementById("input_nome_funcionario").value = informacoes.data.dados_funcionario[0]["nome_funcionario"]; 
    document.getElementById("cod_funcionario").value = informacoes.data.dados_funcionario[0]["cod_funcionario"]; 
    document.getElementById("senha_funcionario").value = informacoes.data.dados_funcionario[0]["senha"];
    document.getElementById("img_photo_funcionario").src = `http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/${informacoes.data.dados_funcionario[0]["foto_perfil"]}`

    //INFORMAÇÕES HORAS TRABALHO
    
    let dia_semana_contador = 1;
    while(dia_semana_contador <= 7)
    {
        if(informacoes.data.dados_dias_trabalho[dia_semana_contador] != null)
        {
            // const input_dia_semana = document.getElementById(`input_dia_semana_${dia_semana_contador}`)
            // input_dia_semana.checked = true

            if(informacoes.data.dados_dias_trabalho[dia_semana_contador][0]!= null)
            {
                // console.log(informacoes.data.dados_dias_trabalho[1][1])

                const primeiro_input_hora_inicio = document.getElementById(`1input_hora_inicio_${dia_semana_contador}`)
                console.log()
                primeiro_input_hora_inicio.value = informacoes.data.dados_dias_trabalho[dia_semana_contador][0].hora_inicio
                const primeiro_input_hora_termino = document.getElementById(`1input_hora_termino_${dia_semana_contador}`)
                primeiro_input_hora_termino.value = informacoes.data.dados_dias_trabalho[dia_semana_contador][0].hora_termino
            }
            // if(informacoes.data.dados_dias_trabalho[dia_semana_contador][1]!= null)
            // {
            //     // console.log(`entrou`)
            //     const segundo_input_hora_inicio = document.getElementById(`2input_hora_inicio_${dia_semana_contador}`)
            //     segundo_input_hora_inicio.value = informacoes.data.dados_dias_trabalho[dia_semana_contador][1].hora_inicio
            //     const segundo_input_hora_termino = document.getElementById(`2input_hora_termino_${dia_semana_contador}`)
            //     segundo_input_hora_termino.value = informacoes.data.dados_dias_trabalho[dia_semana_contador][1].hora_termino
            // }
            else
            {
                console.log("só um horário nesse dia")
            }
        }
        dia_semana_contador = dia_semana_contador+1;
    }        

}

const id_funcionario = 9;
preencherCampos(id_funcionario);