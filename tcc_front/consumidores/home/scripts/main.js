"use strict"

import { carregarAgendamentosConsumidor, criar_lista_agendamentos } from "./agendamentos.js";

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

            console.log(agendamentos)
        }
        else
        {
            console.log("não há agendamentos")
        }

        // let contador_agendamentos = 0;
        // while
        // console.log(agendamentos)

}

carregar_home(id_consumidor);