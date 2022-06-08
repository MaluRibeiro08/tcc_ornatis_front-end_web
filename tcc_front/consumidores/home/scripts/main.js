"use strict"

import { carregarAgendamentosConsumidor, criar_lista_agendamentos } from "./agendamentos.js";
import {organizarPesquisaPorEspecialidade} from "./pesquisa.js";
import { agendar } from "./agendamentos.js";

const id_consumidor = 1;


const carregar_home = async (id_consumidor) =>
{
    ///LISTAGEM AGENDAMENTOS
        const response = await carregarAgendamentosConsumidor(id_consumidor);
        const informacoes = await response.json();
        const agendamentos = informacoes.data;
        
        if(agendamentos.length != 0)
        {
            document.getElementById("aviso_sem_agendamentos").style.display = "none";
            document.getElementById("lista_agendamentos").style.display = "flex";

            criar_lista_agendamentos(agendamentos);

            // console.log(agendamentos)
        }
        else
        {
            // console.log("não há agendamentos")
        }
        

}

carregar_home(id_consumidor);




// ----------------- EVENTOS

//BUSCA DE SERVICOS POR FILTRO
    const elementos_filtros = document.getElementsByClassName("container_categoria")
    const arr_filtros = [...elementos_filtros]

    arr_filtros.map(
        (filtro) =>
        {
            console.log("oi")
            filtro.addEventListener("click", 
                ()=>
                {
                    organizarPesquisaPorEspecialidade(filtro.id, document.getElementById(`categoria_${filtro.id}`).textContent)
                }
            )
        }
    )