const container_perfil_adm = document.getElementById("container_perfil_adm")
const container_dados_localizacao = document.getElementById("container_dados_localizacao")
const container_perfil_salao = document.getElementById("container_perfil_salao")
const container_dados_pagamento = document.getElementById("container_dados_pagamento")
const container_regras_negocio = document.getElementById("container_regras_negocio")
const container_funcionamento = document.getElementById("container_funcionamento")
const container_login = document.getElementById("container_login")



const proximo = document.getElementById("botao_proximo")
let numeroSessao = 1

mudarSecao = () => 
{
    if(numeroSessao == 1)
    {
        numeroSessao = 2
        container_perfil_adm.style.display = "inline"
        container_dados_localizacao.style.display = "none"
        container_perfil_salao.style.display = "none"
        container_dados_pagamento = "none"
        container_regras_negocio = "none"
        container_funcionamento = "none"
        container_login = "none"
        
    }
    else if(numeroSessao == 2) 
    {
        numeroSessao = 3
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "inline"
        container_perfil_salao.style.display = "none"
        container_dados_pagamento = "none"
        container_regras_negocio = "none"
        container_funcionamento = "none"
        container_login = "none"
    } 
    else if (numeroSessao == 3)
    {
        numeroSessao = 4
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_perfil_salao.style.display = "inline"
        container_dados_pagamento = "none"
        container_regras_negocio = "none"
        container_funcionamento = "none"
        container_login = "none"
    }
    else if (numeroSessao == 4)
    {
        numeroSessao = 5
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_perfil_salao.style.display = "none"
        container_dados_pagamento = "inline"
        container_regras_negocio = "none"
        container_funcionamento = "none"
        container_login = "none"
    }
    else if (numeroSessao == 5)
    {
        numeroSessao = 6
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_perfil_salao.style.display = "none"
        container_dados_pagamento = "none"
        container_regras_negocio = "inline"
        container_funcionamento = "none"
        container_login = "none"
    }
    else if (numeroSessao == 6)
    {
        numeroSessao = 7
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_perfil_salao.style.display = "none"
        container_dados_pagamento = "none"
        container_regras_negocio = "none"
        container_funcionamento = "inline"
        container_login = "none"
    }
    else if (numeroSessao == 7)
    {
        numeroSessao = 1
        container_perfil_adm.style.display = "none"
        container_dados_localizacao.style.display = "none"
        container_perfil_salao.style.display = "none"
        container_dados_pagamento = "none"
        container_regras_negocio = "none"
        container_funcionamento = "none"
        container_login = "inline"
    }
}

proximo.addEventListener("click", mudarSecao);


//consumo de api

//PERFIL ESTABELECIEMNTO

const add_estabelecimento= (estabelecimento) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(estabelecimento),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

// PERFIL ADM

const add_administrador = (adm) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(adm),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

//PERFIL LOCALIZACAO

const add_localizacao = (localizacao) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(localizacao),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

//PERFIL PAGAMENTO

const add_pagamento = (pagamento) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(pagamento),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

//PERFIL REGRAS DE NEGOCIO

const add_regra_negocio = (regra_negocio) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(regra_negocio),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

//PERFIL REGRAS DE FUNCIONAMENTO

const add_regra_funcionamento = (regra_funcionamento) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(regra_funcionamento),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};

//PERFIL LOGIN 

const add_login = (login) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options)
};



const salvarCadastro = () => {
    const estabelecimento = {
        nome: document.getElementById('nome').value,
        cnpj: document.getElementById('cnpj').value,
        contato: document.getElementById('contato').value,
        biografia: document.getElementById('biografia').value,
        foto: document.getElementById('circulo').value,
    };

    add_estabelecimento(estabelecimento); 

    const adm = {
        nome: document.getElementById('nome').value,
        data_de_nascimento: document.getElementById('data_nascimento').value,
        cpf: document.getElementById('cpf').value,
    };

    add_administrador(adm);

    const localizacao = {
        cep: document.getElementById('cep').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        rua: document.getElementById('input_rua').value,
        numero: document.getAnimations('input_numero').value,
        complemento: document.getElementById('complemento').value,
    };

    add_localizacao(localizacao);

    const pagamento = {

    };

    add_pagamento(pagamento);


    const login = {
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        confirmar: document.getElementById('confirmar_senha').value,
    };

    add_login(login);
   
};


//DAR IDS PARA OS RADIOS
//UNIFICAR A CONST EM CONTA-ADMINISTRADORA
//DAR VALUES PARA OS RADIOS







