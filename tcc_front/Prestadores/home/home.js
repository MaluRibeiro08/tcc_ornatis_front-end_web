"use strict"

import { carregarAgendamentosEmpresa, criar_lista_agendamentos } from "./agendamentos.js";

const id_empresa = 5;


const carregar_home = async (id_empresa) =>
{
    ///LISTAGEM AGENDAMENTOS
        const response = await carregarAgendamentosEmpresa(id_empresa);
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

carregar_home(id_empresa);

