"use strict"
import { pesquisarServicosPorEspecialidade, criarListaServicos } from "./servicos.js";


const organizarPesquisaPorEspecialidade = async (id_especialidade, nome_categoria) =>
{
    //ORGANIZANDO A TELA
        document.getElementById('input_barra_pesquisa').value = nome_categoria;
        document.getElementById("icone_limpar_pesquisa").style.display = "flex";
        document.getElementById("container_geral_tratamento_pesquisa").style.display = "none";
        document.getElementById("container_geral_listagem_resultante").style.display = "flex";

    //FAZENDO REALMENTE A PESQUISA
        const response = await pesquisarServicosPorEspecialidade(id_especialidade)
        const informacoes = await response.json();
        const servicos = informacoes.data

    //CONSTRUINDO A LISTAGEM
        if(servicos != null && servicos.length !=0)
        {
            document.getElementById("aviso_sem_servicos").style.display = "none"
            criarListaServicos(servicos)
        }
        else
        {   
            document.getElementById("aviso_sem_servicos").style.display = "flex"
            console.log("nao veio servicos")
        }
    
}


// --------------- EVENTOS -------------

document.getElementById("icone_limpar_pesquisa").addEventListener("click", 
    ()=>
    {
        document.getElementById('input_barra_pesquisa').value = "";
        document.getElementById("icone_limpar_pesquisa").style.display = "none";
        document.getElementById("container_geral_tratamento_pesquisa").style.display = "flex";
        document.getElementById("container_geral_listagem_resultante").style.display = "none";
        document.getElementById("container_listagem").innerHTML = ''
    }
)
export {organizarPesquisaPorEspecialidade}