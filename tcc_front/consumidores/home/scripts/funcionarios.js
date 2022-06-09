"use strict"

const url_imagem_funcionario = 'http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/'

const carregarFuncionariosSalao =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)

const carregarDetalhesFuncionario =   (id_funcionario) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_funcionario=${id_funcionario}&acao=listarDetalhesFuncionario`)


const preencherFuncionarios = async (id_empresa) =>
{
    const response = await carregarFuncionariosSalao(id_empresa);

    const informacoes = await response.json();

    const dados = informacoes.data;

    console.log(dados)

    if(dados.length != 0)
    {
        dados.map(async(funcionario) =>
        {
            const response_detalhe_funcionario = await carregarDetalhesFuncionario(funcionario.id_funcionario)
            const informacoes_detalhes_funcionario = await response_detalhe_funcionario.json();
            const dados_detalhados_funcionario = informacoes_detalhes_funcionario.data

            criar_card_funcionario(dados_detalhados_funcionario)
        });
    }
    else
    {
        document.getElementById("container_aviso_sem_funcionarios").style.display = "flex";
        document.getElementById("container_funcionarios").style.display = "none";
    }
    
}


const selecionarFuncionario = (id_funcionario_escolhido) =>
{
    document.getElementById("id_funcionario_escolhido_cadastro_agendamento").value = id_funcionario_escolhido;

    const arr_funcionarios = Array.prototype.slice.call(document.getElementById("container_funcionarios_cadastro_servico").getElementsByClassName("card_funcionario"));

    arr_funcionarios.map((funcionario) => 
    {
        funcionario.classList.remove("funcionario_selecionado")
    })

    console.log(`card_fucionario${id_funcionario_escolhido}`)

    document.getElementById(`card_fucionario${id_funcionario_escolhido}`).classList.add("funcionario_selecionado")
}

const criar_card_funcionario = (funcionario) =>
{
    console.log(funcionario)

    const container_mae = document.getElementById("container_funcionarios_cadastro_servico")
    const novoCard = document.createElement("div")

    novoCard.classList.add("card_funcionario")
    novoCard.id = `card_fucionario${funcionario["dados_funcionario"][0]["id_funcionario"]}`
    console.log(novoCard.id)

    novoCard.innerHTML = 
    `
        <div class="container_img_funcionario">
            <img src="${url_imagem_funcionario+funcionario["dados_funcionario"][0]["foto_perfil"]}" class="foto_funcionario" alt="Foto Funcionario">
        </div>

        <div class="container_informacoes_funcionario">

            <div class="container_nome_funcionario">
                <input type="hidden" id="id_funcionario" value="${funcionario["dados_funcionario"][0]["id_funcionario"]}">
                <p>${funcionario["dados_funcionario"][0]["nome_funcionario"]}</p>
            </div>

            <div class="container_dias_semana">
                <p class="dia_semana container_dia_nao_trabalha dia_semana_2">S</p>
                <p class="dia_semana container_dia_nao_trabalha dia_semana_3">T</p>
                <p class="dia_semana container_dia_nao_trabalha dia_semana_4">Q</p>
                <p class="dia_semana container_dia_nao_trabalha dia_semana_5">Q</p>
                <p class="dia_semana container_dia_nao_trabalha dia_semana_6">S</p>
                <p class="dia_semana container_dia_nao_trabalha dia_semana_7">S</p>
                <p class="dia_semana container_dia_nao_trabalha dia_semana_1">D</p>
            </div>
        </div>
    `

    let dia_semana_contador = 1;    
    while(dia_semana_contador <= 7)
    {
        if(funcionario["dados_dias_trabalho"][dia_semana_contador] != null)
        {
            const container_dia = novoCard.getElementsByClassName(`dia_semana_${dia_semana_contador}`)[0]
            container_dia.classList.add("dia_semana_trabalha");
            container_dia.classList.remove("container_dia_nao_trabalha")
        }

        dia_semana_contador = dia_semana_contador+1;
    }    

    novoCard.addEventListener("click", () => selecionarFuncionario(funcionario["dados_funcionario"][0]["id_funcionario"]))

    container_mae.appendChild(novoCard)
    // console.log(novoCard)
}

export {preencherFuncionarios}