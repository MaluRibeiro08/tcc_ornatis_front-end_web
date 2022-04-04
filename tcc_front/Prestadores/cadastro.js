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