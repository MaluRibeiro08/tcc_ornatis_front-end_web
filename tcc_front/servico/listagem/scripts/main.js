"use strict"
import { listarServicosSalao, construirTelaCadastro, pegarDadosServico} from "./manipulacao_campos_servico.js";
import { fecharModal, tratarUploadImagem } from "./modais.js";
import { excluirServico, salvarServico  } from './servico.js';


const id_empresa = 1;

//AO INICIAR A PÁGINA, A LISTAGEM É FEITA E OS DADOS-BASE DO MODAL SÃO CARREDADOS
    listarServicosSalao(id_empresa);
    construirTelaCadastro(id_empresa);




//EVENTOS
document.getElementById("fechar_modal_edicao").addEventListener("click", fecharModal)

document.getElementById("botao_salvar_edicao").addEventListener('click', () =>
{
    const data = pegarDadosServico(id_empresa)
    salvarServico(data);
})

document.getElementById("botao_nao_exclusao_servico").addEventListener('click', fecharModal)

document.getElementById("botao_sim_exclusao_servico").addEventListener('click', (evento)=>
{
    const id_servico = document.getElementById("id_servico_excluir").value;
    document.getElementById(`id_servico${id_servico}`).style.display = "none"
    excluirServico(id_servico).then(fecharModal)
})

// document.getElementById("input_foto_funcionario").addEventListener("change", (tratarUploadImagem))