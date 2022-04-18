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

//upload de imagem 

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



//verificando checkbox 

let checkbox = document.getElementById('radio_dinheiro');
if(checkbox.ariaChecked) {
    console.log("O cliente marcou o checkbox");
} else {
    console.log("O cliente não marcou o checkbox");
}

//consumo de api

const conta_administradora = (conta_adm) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(conta_adm),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

const salvarCadastro = () => {
    const conta_administradora = {
        //estabelecimento
        nome: document.getElementById('nomeEstabelecimento').value,
        cnpj: document.getElementById('cnpj').value,
        contato: document.getElementById('contato').value,
        biografia: document.getElementById('biografia').value,
        foto: document.getElementById('img_photo_estabelecimento'.src),
        //adm
        foto: document.getElementById('fl_image').src,
        nome: document.getElementById('nomeAdministrador').value,
        data_de_nascimento: document.getElementById('data_nascimento').value,
        cpf: document.getElementById('cpf').value, 
        //localizacao
        cep: document.getElementById('cep').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        rua: document.getElementById('input_rua').value,
        numero: document.getElementById('input_numero').value,
        complemento: document.getElementById('complemento').value,
        //pagamento
        // dinheiro: document.getElementById('radio_dinheiro'),
        // cartao_credito: document.getElementById('radio_credito'),
        // cartao_debito: document.getElementById('radio_debito'),
        // pix: document.getElementById('radio_pix'),
        // via_app: document.getElementById('radio_app'),
        // bandeira: document.getElementsById('bandeira'),
        //negocio
        radio_sim: document.getElementsById('radio_sim'),
        radio_nao: document.getElementsById('radio_nao'),
        radio_padrao: document.getElementsById('radio_padrao'),
        radio_personalizada: document.getElementsById('radio_personalizada'),
        radio_abaixo100: document.getElementsById('radio_abaixo100'),
        radio_acima100: document.getElementsById('radio_acima100'),
        //funcionamento
        //login
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        confirmar: document.getElementById('confirmar_senha').value,
    };


    conta_administradora(conta_adm);
   
};


//DAR IDS PARA OS RADIOS
//UNIFICAR A CONST EM CONTA-ADMINISTRADORA
//DAR VALUES PARA OS RADIOS
//AJUSTAR AS IMG







