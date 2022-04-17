"use strict"

// testeUpdate()

//imports 
import { getDadosPagamento, getDadosRegrasNegocio, getFuncionamento } from "./func_info_complexas.js";
//RADIOS / INPUTS / OUTROS
const radio_sim_regra_cancelmento = document.getElementById('input_radio_sim_cancelamento')
const radio_nao_regra_cancelmento = document.getElementById('input_radio_nao_cancelamento')

const radio_sim_intervalo = document.getElementById('input_radio_sim_intervalo')
const radio_nao_intervalo = document.getElementById('input_radio_nao_intervalo')

const radio_taxa_unica = document.getElementById('input_radio_taxa_unica')
const radio_taxa_variada = document.getElementById('input_radio_variada')

const icone_adicao_regra = document.getElementById('icone_adicao_regra')
let numeroDaRegra = null

const btn_editar = document.getElementById('btn_editar');
const btn_salvar = document.getElementById('btn_salvar');

//CONTAINERS   GERAIS
const container_perfil_estabelecimento = document.getElementById('container_secao_perfil_estabelecimento');
const container_perfil_administrador = document.getElementById('container_secao_perfil_administrador');
const container_localizacao = document.getElementById('container_secao_dados_localizacao');
const container_recebimento = document.getElementById('container_secao_recebimento');
const container_regras_negocio = document.getElementById('container_secao_regras_negocio');
const container_secao_funcionamento = document.getElementById('container_secao_funcionamento');
const container_login = document.getElementById('container_secao_dados_login');


//LINKS
const link_perfil_estabelecimento = document.getElementById('link_perfil_estabelecimento');
const link_perfil_administrador = document.getElementById('link_perfil_administrador');
const link_localizacao = document.getElementById('link_localizacao');
const link_recebimento = document.getElementById('link_recebimento');
const link_regra_negocio = document.getElementById('link_regra_negocio');    
const link_funcionamento = document.getElementById('link_funcionamento');
const link_dados_login = document.getElementById('link_dados_login');

//CAMPOS
const input_nome_estabelecimento = document.getElementById("input_nome_negocio");
const input_cnpj = document.getElementById("input_cnpj");
const input_contato = document.getElementById("input_contato");
const input_biografia = document.getElementById("input_biografia");
const input_nome_adm = document.getElementById("input_nome_adm");
const input_data_nascimento = document.getElementById("input_data_nascimento");
const input_cpf = document.getElementById("input_cpf");
const input_cep = document.getElementById("input_cep");
const input_bairro = document.getElementById("input_bairro");
const input_rua = document.getElementById("input_rua");
const input_numero = document.getElementById("input_numero");
const input_complemento = document.getElementById("input_complemento");
const input_estado = document.getElementById("input_estado");
const input_email = document.getElementById("input_email");
const input_senha = document.getElementById("input_senha");
const input_imagem = document.getElementById("input_foto_estabelecimento")
const img_foto_perfil = document.getElementById("img_estabelecimento")
const input_observacoes_pagamento = document.getElementById("input_observacoes_pagamento")
const input_valor_taxa_unica = document.getElementById("input_valor_taxa_unica")
const input_dia_semana_1 = document.getElementById("input_dia_semana_1")
const input_dia_semana_2 = document.getElementById("input_dia_semana_2")
const input_dia_semana_3 = document.getElementById("input_dia_semana_3")
const input_dia_semana_4 = document.getElementById("input_dia_semana_4")
const input_dia_semana_5 = document.getElementById("input_dia_semana_5")
const input_dia_semana_6 = document.getElementById("input_dia_semana_6")
const input_dia_semana_7 = document.getElementById("input_dia_semana_7")




const testeUpdate = (id_empresa, id_cidade) =>
{
    const data = {};
    // data['acao'] = 'updateContaAdministradora';
    data['id_empresa'] = 1; //id_empresa

    //perfil estabelecimento
    data['id_empresa'] = id_empresa;
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

    //dados de recebimento
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
        data["intervalo_tempo_padrao_entre_servicos"] = null
    }
    data['dados_funcionamento'] = getFuncionamento();
    // data[''] = input_.value;
    // data[''] = input_.value;
    // data[''] = input_.value;



    return data
}

export {testeUpdate}
