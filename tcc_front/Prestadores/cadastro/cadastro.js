const container_estabelecimento = document.getElementById("container_estabelecimento");
const container_perfil_adm = document.getElementById("container_perfil_adm");
const container_dados_localizacao = document.getElementById("container_dados_localizacao");
const container_dados_pagamento = document.getElementById("container_dados_pagamento");
const container_regras_negocio = document.getElementById("container_regras_negocio");
const container_funcionamento = document.getElementById("container_funcionamento");
const container_login = document.getElementById("container_login");



const proximo = document.getElementById("botao_proximo");
let numeroSessao = 1

mudarSecao = () => 
{
    console.log(numeroSessao)
    if(numeroSessao == 1)
    {
        numeroSessao = 2
        container_estabelecimento.style.display = "inline"
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_dados_pagamento.style.display = "none"
        container_regras_negocio.style.display = "none"
        container_funcionamento.style.display = "none"
        container_login.style.display = "none"
        console.log(numeroSessao)
        
    }
    else if(numeroSessao == 2) 
    {
        numeroSessao = 3
        container_estabelecimento.style.display = "none"
        container_perfil_adm.style.display = "inline"
        container_dados_localizacao.style.display = "none"
        container_dados_pagamento.style.display = "none"
        container_regras_negocio.style.display = "none"
        container_funcionamento.style.display = "none"
        container_login.style.display = "none"
        console.log(numeroSessao)
    } 
    else if (numeroSessao == 3)
    {
        numeroSessao = 4
        container_estabelecimento.style.display =  "none"
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "inline"
        container_dados_pagamento.style.display = "none"
        container_regras_negocio.style.display = "none"
        container_funcionamento.style.display = "none"
        container_login.style.display = "none"
        console.log(numeroSessao)
    }
    else if (numeroSessao == 4)
    {
        numeroSessao = 5
        container_estabelecimento.style.display =  "none"
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_dados_pagamento.style.display = "inline"
        container_regras_negocio.style.display = "none"
        container_funcionamento.style.display = "none"
        container_login.style.display = "none"
    }
    else if (numeroSessao == 5)
    {
        numeroSessao = 6
        container_estabelecimento.style.display =  "none"
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_dados_pagamento.style.display = "none"
        container_regras_negocio.style.display = "inline"
        container_funcionamento.style.display = "none"
        container_login.style.display = "none"
    }
    else if (numeroSessao == 6)
    {
        numeroSessao = 7
        container_estabelecimento.style.display =  "none"
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_dados_pagamento.style.display = "none"
        container_regras_negocio.style.display = "none"
        container_funcionamento.style.display = "inline"
        container_login.style.display = "none"
    }
    else if (numeroSessao == 7)
    {
        numeroSessao = 1;
        container_estabelecimento.style.display =  "none"
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_dados_pagamento.style.display = "none"
        container_regras_negocio.style.display = "none"
        container_funcionamento.style.display = "none"
        container_login.style.display = "inline"
    }
}

proximo.addEventListener("click", mudarSecao);

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

file2.addEventListener('change', (event) => {
    let reader2 = new FileReader();

    reader2.onload = () => {
        photo_estabelecimento.src = reader2.result;
    }

    reader2.readAsDataURL(file2.files[0]);
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

export {pegar_dados_conta_adm}

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


//DAR IDS PARA OS RADIOS
//UNIFICAR A CONST EM CONTA-ADMINISTRADORA
//DAR VALUES PARA OS RADIOS
//AJUSTAR AS IMG


    //     //estabelecimento
    //     nome: document.getElementById('nomeEstabelecimento').value,
    //     cnpj: document.getElementById('cnpj').value,
    //     contato: document.getElementById('contato').value,
    //     biografia: document.getElementById('biografia').value,
    //     foto: document.getElementById('img_photo_estabelecimento'.src),
    //     //adm
    //     foto: document.getElementById('fl_image').src,
    //     nome: document.getElementById('nomeAdministrador').value,
    //     data_de_nascimento: document.getElementById('data_nascimento').value,
    //     cpf: document.getElementById('cpf').value, 
    //     //localizacao
    //     cep: document.getElementById('cep').value,
    //     bairro: document.getElementById('bairro').value,
    //     cidade: document.getElementById('cidade').value,
    //     estado: document.getElementById('estado').value,
    //     rua: document.getElementById('input_rua').value,
    //     numero: document.getElementById('input_numero').value,
    //     complemento: document.getElementById('complemento').value,
    //     //pagamento
    //     // dinheiro: document.getElementById('radio_dinheiro'),
    //     // cartao_credito: document.getElementById('radio_credito'),
    //     // cartao_debito: document.getElementById('radio_debito'),
    //     // pix: document.getElementById('radio_pix'),
    //     // via_app: document.getElementById('radio_app'),
    //     // bandeira: document.getElementsById('bandeira'),
    //     //negocio
    //     radio_sim: document.getElementsById('radio_sim'),
    //     radio_nao: document.getElementsById('radio_nao'),
    //     radio_padrao: document.getElementsById('radio_padrao'),
    //     radio_personalizada: document.getElementsById('radio_personalizada'),
    //     radio_abaixo100: document.getElementsById('radio_abaixo100'),
    //     radio_acima100: document.getElementsById('radio_acima100'),
    //     //funcionamento
    //     //login
    //     email: document.getElementById('email').value,
    //     senha: document.getElementById('senha').value,
    //     confirmar: document.getElementById('confirmar_senha').value,
    // };


    // let checkbox = document.getElementById('radio_dinheiro');
    // if(checkbox.ariaChecked) {
    //     console.log("O cliente marcou o checkbox");
    // } else {
    //     console.log("O cliente não marcou o checkbox");
    // }

