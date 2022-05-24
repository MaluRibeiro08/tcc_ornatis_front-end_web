"use strict"
let secao_atual = 1;


const mudar_setas = (secao_atual) =>
{
    
    if(secao_atual == 1)
    {
        document.querySelector(".container_seta_anterior").style.visibility = 'hidden';
    }
    else if (secao_atual == 4)
    {
        document.getElementById("texto_seta_proximo").innerText = "Concluir cadastro!"
        document.getElementById("icone_seta_proximo").innerText = "done"
        document.querySelector(".container_seta_proxima").classList.add("concluir")
    }
    else if (secao_atual == 2)
    {
        document.querySelector(".container_seta_anterior").style.visibility = 'visible';
    }
    else if (secao_atual != 4)
    {
        document.getElementById("texto_seta_proximo").innerText = "Próxima"
        document.getElementById("icone_seta_proximo").innerText = "navigate_next"
        document.querySelector(".container_seta_proxima").classList.remove("concluir")
    }
}

const mudar_secoes = (tipo_mudanca) =>
{
    // console.log("você está na secao" + secao_atual)
    if(tipo_mudanca == "avancar")
    {
        document.querySelector(`.secao${secao_atual}`).style.display = 'none';
        document.getElementById(`container_titulo${secao_atual}`).style.display = 'none';

        const secao_destino = secao_atual+1;
        document.querySelector(`.secao${secao_destino}`).style.display = 'flex';
        document.getElementById(`container_titulo${secao_destino}`).style.display = 'flex';
        document.querySelector(`.bolinha${secao_destino}`).style.backgroundColor = '#93DCD0';

        secao_atual = secao_destino;
        mudar_setas(secao_atual);
        // colorir_indicadores(secao_atual);
    }
    else if (tipo_mudanca == "voltar")
    {
        document.querySelector(`.secao${secao_atual}`).style.display = 'none';
        document.getElementById(`container_titulo${secao_atual}`).style.display = 'none';

        document.querySelector(`.bolinha${secao_atual}`).style.backgroundColor = '#d3d3d3';
        
        const secao_destino = secao_atual-1;
        document.querySelector(`.secao${secao_destino}`).style.display = 'flex';
        document.getElementById(`container_titulo${secao_destino}`).style.display = 'flex';

        secao_atual = secao_destino;
        mudar_setas(secao_atual);
        // colorir_indicadores(secao_atual);
    }
    else
    {
        console.log("Erro ao executar comando de navegação entre secoes de cadastro")
    }
    // console.log("você foi pra secao" + secao_atual)
}

export {mudar_secoes}