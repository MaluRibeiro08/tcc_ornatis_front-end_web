"use strict"

const container_estabelecimento = document.getElementById("container_estabelecimento");
const container_perfil_adm = document.getElementById("container_perfil_adm");
const container_dados_localizacao = document.getElementById("container_dados_localizacao");
const container_dados_pagamento = document.getElementById("container_dados_pagamento");
const container_regras_negocio = document.getElementById("container_regras_negocio");
const container_funcionamento = document.getElementById("container_funcionamento");
const container_login = document.getElementById("container_login");



/******************REGRAS DE NEGOCIO*******************/

const criarRegraCancelamento = (acimaCem, tolerancia, taxa) =>
    {
        const conteinerRegras = document.getElementById("container_regras_cancelamentos")
        if(numeroDaRegra == null)
        {
            numeroDaRegra = conteinerRegras.childElementCount + 1
        }
        else
        {
            numeroDaRegra = numeroDaRegra+1
        }
        const novaRegra = document.createElement("div") 

        novaRegra.classList.add("container_regra_cancelamento")
        novaRegra.id = `container_regra${numeroDaRegra}`

        const checkedAcima = acimaCem == null ? '': (acimaCem == true ? 'checked' : '')
        const checkedAbaixo = acimaCem == null ? '': (acimaCem == true ?  '' : 'checked')
        const disabled = acimaCem == null ? '': 'disabled'
        novaRegra.innerHTML = 
        `
        <div class="container_acoes">
        <span id="icone_delecao_regra${numeroDaRegra}" class="material-icons-outlined icone_delecao_regra" onclick="deletarRegraCancelamento('container_regra${numeroDaRegra}')" >delete</span>
        <span id="icone_adicao_regra" class="material-icons-outlined">
            add
        </span>
    </div>
    <div class="container_regra_cancelamento">
         <div class="container_valor_servico">
        <h4>Válida para serviços:</h4>
        <div class="container_radios_valor">
            <div class="container_radio_valor_servico" id="container_radio_acima_cem">
                <input ${disabled} type="radio" name='valor_servico_regra${numeroDaRegra}' id='input_radio_acima_cem_regra${numeroDaRegra}' ${checkedAcima}>
                <label class="label_valor_servico" for='input_radio_acima_cem_regra${numeroDaRegra}' >Acima de R$ 100,00</label>
            </div>
            <div class="container_radio_valor_servico" id="container_radio_abaixo_cem">
                <input ${disabled} type="radio" name='valor_servico_regra${numeroDaRegra}' id='input_radio_abaixo_cem_regra${numeroDaRegra}' ${checkedAbaixo}>
                <label class="label_valor_servico" for='input_radio_abaixo_cem_regra${numeroDaRegra}'>Abaixo de R$ 100,00</label>
            </div>
        </div>
    </div>
    <div class="container_tolerancia">
        <h4 class="label_taxa">Tolerância:</h4>
        <div class="container_input_tolerancia">
            <p >até <input ${disabled} type="text" class="input_regra" id='input_tempo_tolerancia_regra${numeroDaRegra}' value = '${tolerancia}' >h de antecedencia</p>
        </div>
    </div>
    <div class="container_valor_taxa">
        <h4 class="label_taxa" >Taxa sobre o valor do serviço:</h4>
        <div class="container_input_valor_taxa">
            <p ><input ${disabled} type="text" class="input_regra" id='input_valor_taxa_variada_regra${numeroDaRegra}' value='${taxa}'> %</p>
        </div>
    </div>
</div>
        `
    
    conteinerRegras.appendChild(novaRegra)
}

/******************UPLOAD DE IMAGEM*******************/

//adm
let photo = document.getElementById('img_photo');
let file = document.getElementById('fl_image_adm');

photo.addEventListener('click', () => {
    file.click();
});

//estabelecimento
let photo_estabelecimento = document.getElementById('img_photo_estabelecimento');
let file2 = document.getElementById('fl_image_estabelecimento');

photo_estabelecimento.addEventListener('click', () => {
    file2.click();
});

//fazer aparecer a imagem quando fizer upload

  file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

    file2.addEventListener('change', (event) =>{
        let est = new FileReader();

        est.onload = () => {
            photo_estabelecimento.src = est.result;
        }

        est.readAsDataURL(file2.files[0]);
    })



/********************CONSUMO DE API*************************/

//ESTABELECIMENTO
const input_nome_estabelecimento = document.getElementById("nome_estabelecimento");
const input_cnpj = document.getElementById("cnpj");
const input_contato = document.getElementById("contato");
const input_biografia = document.getElementById("biografia");
const input_imagem = document.getElementById("img_photo_estabelecimento")
//ADM
const input_nome_adm = document.getElementById("nome_administrador");
const input_data_nascimento = document.getElementById("data_nascimento");
const input_cpf = document.getElementById("cpf");
const img_foto_perfil = document.getElementById("img_photo")
//LOCALIZACAO
const input_cep = document.getElementById("cep");
const input_bairro = document.getElementById("bairro");
const input_estado = document.getElementById("estado");
const input_rua = document.getElementById("input_rua");
const input_numero = document.getElementById("input_numero");
const input_complemento = document.getElementById("complemento");
//PAGAMENTO
const input_observacoes_pagamento = document.getElementById("bandeira")
const input_valor_taxa_unica = document.getElementById("input_valor_taxa_unica")
//LOGIN
const input_email = document.getElementById("email");
const input_senha = document.getElementById("senha");
//FUNCIONAMENTO
const input_dia_semana_1 = document.getElementById("input_dia_semana_1")
const input_dia_semana_2 = document.getElementById("input_dia_semana_2")
const input_dia_semana_3 = document.getElementById("input_dia_semana_3")
const input_dia_semana_4 = document.getElementById("input_dia_semana_4")
const input_dia_semana_5 = document.getElementById("input_dia_semana_5")
const input_dia_semana_6 = document.getElementById("input_dia_semana_6")
const input_dia_semana_7 = document.getElementById("input_dia_semana_7")
//BOTOES
const btn_concluir = document.getElementById('botao_concluir');


const salvar_conta_administradora = () =>{
    const dados = conta_adm(id_cidade)
    const options = {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

const pegar_dados_conta_adm = (id_cidade) =>
{
    const data = {};
    data['acao'] = 'updateContaAdministradora';

    //perfil estabelecimento
    data['nome_fantasia'] = input_nome_estabelecimento.value;
    data['biografia'] = input_biografia.value;
    data['imagem_perfil'] = input_imagem.src;
    data['telefone'] = input_contato.value;
    data['cnpj'] = input_cnpj.value;

    //perfil administrador
    data['nome_adm'] = input_nome_adm.value;
    data['data_nascimento'] = input_data_nascimento.value;
    data['cpf'] = input_cpf.value;

    //dados de localização
    data['cep'] = input_cep.value;
    data['bairro'] = input_bairro.value;
    data['rua'] = input_rua.value;
    data['numero_rua'] = input_numero.value;
    data['complemento'] = input_complemento.value;
    data['id_cidade'] = id_cidade;

    //dados de pagamento
    data['dados_formas_pagamento'] = getDadosPagamento();
    data['observacoes_pagamento'] = input_observacoes_pagamento.value;

    //dados de regas de nogócio - taxa cancelamento
    if(radio_nao_regra_cancelmento.checked == true)
    {
        data['taxa_unica_cancelamento'] = 0;
    }
    else
    {
        if(radio_taxa_unica.checked == true)
        {
            data['taxa_unica_cancelamento'] = document.getElementById("input_valor_taxa_unica").value;
        }
        else
        {
            data['taxa_unica_cancelamento'] = null;
            data['dados_taxa_cancelamento'] = getDadosRegrasNegocio();
        }
    }

    //dados de funcionamento
    if(radio_sim_intervalo.checked == true)
    {
        data["intervalo_tempo_padrao_entre_servicos"] = document.getElementById("input_intervalo_padrao").value
    }
    else
    {
        data["intervalo_tempo_padrao_entre_servicos"] = 0
    }
    data['dados_funcionamento'] = getFuncionamento();
    // data[''] = input_.value;
    // data[''] = input_.value;
    // data[''] = input_.value;

    //dados de login
    data['login'] = input_email.value;
    data['senha'] = input_senha.value;



    return data
}

// export {pegar_dados_conta_adm}

//click do botao concluir

btn_concluir.addEventListener("click", async ()  => {
    const data = testeUpdate(id_empresa, id_cidade)
    console.log(data)
    const options =
    {
        method : 'POST',
        body: JSON.stringify(data), //transforma o produto que era JSON em String, serializa
        headers: 
        {
            'content-type' : 'application/json'
        }
    }

    console.log(options);
     fetch(url, options).then(response => response.json()).then(data => {
        console.log(data)})

    alert("Alterações salvar com sucesso!")
    // location.reload();
})


//DAR VALUES PARA OS RADIOS

