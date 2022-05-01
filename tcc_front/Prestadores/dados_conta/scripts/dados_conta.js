"use strict"

import { imagemPreview } from "../../../utils/imagem.js";
import { testeUpdate  } from "./update/update.js";
import { preencherFormularioEndereco } from "../../../utils/cep.js";
import { mudancaCheckDiaFuncionamento } from "./funcionamento_dinamizacao.js";

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

    //variavel que guardará o código da cidade
    const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/contaAdministradora/'

    let id_cidade = 3534401;
    const id_empresa = 58;

    testeUpdate(id_empresa, id_cidade)

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
    const input_id_empresa = document.getElementById("id_empresa");
    const input_nome_estabelecimento = document.getElementById("input_nome_negocio");
    const input_cnpj = document.getElementById("input_cnpj");
    const input_contato = document.getElementById("input_contato");
    const input_biografia = document.getElementById("input_biografia");
    const input_nome_adm = document.getElementById("input_nome_adm");
    const input_data_nascimento = document.getElementById("input_data_nascimento");
    const input_cpf = document.getElementById("input_cpf");
    const input_cep = document.getElementById("input_cep");
    const input_bairro = document.getElementById("input_bairro");
    const input_cidade = document.getElementById("input_cidade");
    const input_id_cidade = document.getElementById("id_cidade");
    const input_rua = document.getElementById("input_rua");
    const input_numero = document.getElementById("input_numero");
    const input_complemento = document.getElementById("input_complemento");
    const input_estado = document.getElementById("input_estado");
    const input_email = document.getElementById("input_email");
    const input_senha = document.getElementById("input_senha");
    const input_imagem = document.getElementById("input_foto_estabelecimento")
    const img_foto_perfil = document.getElementById("img_estabelecimento")
    const input_check_forma1 = document.getElementById("input_forma_pagamento1")
    const input_check_forma2 = document.getElementById("input_forma_pagamento2")
    const input_check_forma3_ = document.getElementById("input_forma_pagamento3")
    const input_check_forma4 = document.getElementById("input_forma_pagamento4")
    const input_check_forma5 = document.getElementById("input_forma_pagamento5")
    const input_observacoes_pagamento = document.getElementById("input_observacoes_pagamento")
    const input_valor_taxa_unica = document.getElementById("input_valor_taxa_unica")
    const input_dia_semana_1 = document.getElementById("input_dia_semana_1")
    const input_dia_semana_2 = document.getElementById("input_dia_semana_2")
    const input_dia_semana_3 = document.getElementById("input_dia_semana_3")
    const input_dia_semana_4 = document.getElementById("input_dia_semana_4")
    const input_dia_semana_5 = document.getElementById("input_dia_semana_5")
    const input_dia_semana_6 = document.getElementById("input_dia_semana_6")
    const input_dia_semana_7 = document.getElementById("input_dia_semana_7")

    // const carregarDadosConta =   (id_empresa) => fetch(`http://10.107.144.20/ornatis/api-ornatis/rotas/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarDadosConta`)
    const carregarDadosConta =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarDadosConta`)
    const preencherFormasPagamento = () =>
    {
        // console.log("teste")
    }
    const preencherCampos = async (id_empresa) =>
    {
        const response = await carregarDadosConta(id_empresa);
        // console.log(response)
        const informacoes = await response.json();
        console.log(informacoes)
        // console.log(informacoes.data.dados_empresa[0]["nome_fantasia"])

        input_id_empresa.value = id_empresa; 
        input_nome_estabelecimento.value = informacoes.data.dados_empresa[0]["nome_fantasia"]; 
        input_cnpj.value = informacoes.data.dados_empresa[0]["cnpj"]; 
        input_contato.value = informacoes.data.dados_empresa[0]["telefone"]; 
        input_biografia.value = informacoes.data.dados_empresa[0]["biografia"];
        img_foto_perfil.src =  "http://localhost/tcc_ornatis_back-end/api-ornatis/upload/imagem_perfil_salao/" + informacoes.data.dados_empresa[0]["imagem_perfil"];
        input_nome_adm.value = informacoes.data.dados_administrador[0]["nome_adm"]; 
        input_data_nascimento.value = informacoes.data.dados_administrador[0]["data_nascimento"];
        input_cpf.value = informacoes.data.dados_administrador[0]["cpf"];
        input_cep.value = informacoes.data.dados_endereco_empresa[0]["cep"];
        input_bairro.value = informacoes.data.dados_endereco_empresa[0]["bairro"];
        input_cidade.value = informacoes.data.dados_endereco_empresa[0]["nome_cidade"];
        input_id_cidade.value = informacoes.data.dados_endereco_empresa[0]["id_cidade"];
        input_rua.value = informacoes.data.dados_endereco_empresa[0]["rua"];
        input_numero.value = informacoes.data.dados_endereco_empresa[0]["numero"];
        input_complemento.value = informacoes.data.dados_endereco_empresa[0]["complemento"];
        input_estado.value = informacoes.data.dados_endereco_empresa[0]["sigla_estado"];
        input_email.value = informacoes.data.dados_login[0]["email_adm"];
        input_senha.value = informacoes.data.dados_login[0]["senha_adm"];

        //INFORMACOES PAGAMENTO
            const arr_formas_recebidas = informacoes.data.dados_pagamento;
            // console.log(arr_formas_recebidas);

            let contador = 0;

            if(arr_formas_recebidas == "Nenhuma forma de pagamento encontrada")
            {
                alert("Cadastre uma forma de recebimento!")
            }
            else
            {
                while (contador <=5) 
                {
                    
                    if(arr_formas_recebidas["formas_aceitas"][contador] != null)
                    {
                        const elemento = document.getElementById(`input_forma_pagamento${contador}`)
                        elemento.checked = true
                    }
                    contador = contador+1
                }
            }

            if(informacoes.data.dados_pagamento.observacoes_pagamento == 'undefined')
            {
                input_observacoes_pagamento.value = ''
            }
            else
            {
                input_observacoes_pagamento.value = informacoes.data.dados_pagamento.observacoes_pagamento
            }

            

        //INFORMACOES PAGAMENTO
            if(informacoes.data.taxa_cancelamento_empresa == null)
            {
                radio_nao_regra_cancelmento.checked = true
                radio_nao_regra_cancelmento.addEventListener("click", ()=>{
                    fecharContainer("container_geral_regras");
                })
            }
            else
            {
                radio_sim_regra_cancelmento.checked = true;
                abrirContainer("container_geral_regras");
                
                if(informacoes.data.taxa_cancelamento_empresa.taxa_unica_cancelamento != null)
                {
                    radio_taxa_unica.checked = true;
                    abrirContainer("container_taxa_unica");

                    input_valor_taxa_unica.value = informacoes.data.taxa_cancelamento_empresa.taxa_unica_cancelamento
                }
                else
                {
                    radio_taxa_variada.checked = true;

                    abrirContainer("container_regras_cancelamentos");
                    // abrirContainer("icone_adicao_regra");

                    informacoes.data.taxa_cancelamento_empresa.map((elemento)=>
                    {
                        // teste(elemento)
                        criarRegraCancelamento
                        (
                            elemento["valor_acima_de_100"],
                            elemento["horas_tolerancia"],
                            elemento["porcentagem_sobre_valor_servico"]
                        )
                    })
                    
                }
            }

        //INFORMAÇÕES FUNCIONAMENTO
        
        if(informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"] != null && 
            informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"] != 0 )
        { 
            radio_sim_intervalo.checked = true;
            abrirContainer("container_valor_intervalo");
            const input_intervalo_padrao = document.getElementById("input_intervalo_padrao")
            input_intervalo_padrao.value = informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"]
            // console.log(informacoes.data.dados_empresa[0]["intervalo_tempo_padrao_entre_servicos"])
        }
        else
        {
            radio_nao_intervalo.checked = true;
        }

        let dia_semana_contador = 1;
        while(dia_semana_contador <= 7)
        {
            if(informacoes.data.dados_funcionamento[dia_semana_contador] != null)
            {
                const input_dia_semana = document.getElementById(`input_dia_semana${dia_semana_contador}`)
                input_dia_semana.checked = true

                const container_dia_semana = document.getElementById(`container_horarios_dia${dia_semana_contador}`)
                container_dia_semana.style.display = 'flex';

                if(informacoes.data.dados_funcionamento[dia_semana_contador][0]!= null)
                {
                    // console.log(informacoes.data.dados_funcionamento[1][1])

                    const primeiro_input_hora_inicio = document.getElementById(`1input_hora_inicio${dia_semana_contador}`)
                    primeiro_input_hora_inicio.value = informacoes.data.dados_funcionamento[dia_semana_contador][0].hora_inicio
                    const primeiro_input_hora_termino = document.getElementById(`1input_hora_termino${dia_semana_contador}`)
                    primeiro_input_hora_termino.value = informacoes.data.dados_funcionamento[dia_semana_contador][0].hora_termino
                }
                if(informacoes.data.dados_funcionamento[dia_semana_contador][1]!= null)
                {
                    // console.log(`entrou`)
                    const segundo_input_hora_inicio = document.getElementById(`2input_hora_inicio${dia_semana_contador}`)
                    segundo_input_hora_inicio.value = informacoes.data.dados_funcionamento[dia_semana_contador][1].hora_inicio
                    const segundo_input_hora_termino = document.getElementById(`2input_hora_termino${dia_semana_contador}`)
                    segundo_input_hora_termino.value = informacoes.data.dados_funcionamento[dia_semana_contador][1].hora_termino
                }
                else
                {
                    console.log("só um horário nesse dia")
                }
            }
            dia_semana_contador = dia_semana_contador+1;
        }        

    }
    preencherCampos(id_empresa);
    // const teste = (teste) => console.log(teste) 

    const settarDisplayInvisivel = (elemento) => elemento.style.display = "none"
    const tirarClasseElemento = (elemento) => elemento.classList.remove("aberto_visualizacao")
    
    const invisibilizarSecoes = () =>
    {
        const arrSecoes = [container_perfil_estabelecimento, container_perfil_administrador, container_localizacao, container_recebimento, container_regras_negocio, container_secao_funcionamento, container_login];
        const $resultado = arrSecoes.map(settarDisplayInvisivel);
    }
    const descolorirLinks = (target) =>
    {
        const arrLinks = [link_perfil_estabelecimento, link_perfil_administrador, link_localizacao, link_recebimento, link_regra_negocio, link_funcionamento, link_dados_login];
        const $resultado = arrLinks.map(tirarClasseElemento);
        // console.log(target);
        target.classList.add("aberto_visualizacao")
    }

    const trocarVisualizacaoSecoes = (alvo) =>
    {
        invisibilizarSecoes();
        alvo.style.display = "flex";
    }

    const tratarUploadImagem = ({target}) =>
    {
        imagemPreview(target.id, img_foto_perfil.id);
    }
    
    const abrirContainer = (id_container) =>
    {
        const container = document.getElementById(`${id_container}`);
        container.style.display = "flex";
    }
    const fecharContainer = (id_container) =>
    {
        const container = document.getElementById(`${id_container}`);
        container.style.display = "none";
    }

    const criarRegraCancelamento = (acimaCem, tolerancia, taxa) =>
    {
        const conteinerRegras = document.getElementById("container_regras_cancelamentos")
        if(numeroDaRegra == null)
        {
            numeroDaRegra = conteinerRegras.childElementCount + 1
        }
        else
        {
            numeroDaRegra = numeroDaRegra+1
        }
        const novaRegra = document.createElement("div") 

        novaRegra.classList.add("container_regra_cancelamento")
        novaRegra.id = `container_regra${numeroDaRegra}`

        const checkedAcima = acimaCem == null ? '': (acimaCem == true ? 'checked' : '')
        const checkedAbaixo = acimaCem == null ? '': (acimaCem == true ?  '' : 'checked')
        const disabled = acimaCem == null ? '': 'disabled'

        // console.log("acimaCem" + acimaCem)
        // console.log("checkedAcima" + checkedAcima)
        // console.log("checkedAbaixo  " + checkedAbaixo )

            novaRegra.innerHTML = 
            `
                <div class="container_acoes">
                <span id="icone_delecao_regra${numeroDaRegra}" class="material-icons-outlined icone_delecao_regra" onclick="deletarRegraCancelamento('container_regra${numeroDaRegra}')" >
                    delete
                </span>
                </div>
                <div class="informacoes">
                    <div class="container_valor_servico">
                        <h4>Válida para serviços:</h4>
                        <div class="container_radios_valor">
                            <div class="container_radio_valor_servico" id="container_radio_acima_cem">
                                <input ${disabled} type="radio" name='valor_servico_regra${numeroDaRegra}' id='input_radio_acima_cem_regra${numeroDaRegra}' ${checkedAcima}>
                                <label class="label_valor_servico" for='input_radio_acima_cem_regra${numeroDaRegra}' >Acima de R$ 100,00</label>
                            </div>
                            <div class="container_radio_valor_servico" id="container_radio_abaixo_cem">
                                <input ${disabled} type="radio" name='valor_servico_regra${numeroDaRegra}' id='input_radio_abaixo_cem_regra${numeroDaRegra}' ${checkedAbaixo}>
                                <label class="label_valor_servico" for='input_radio_abaixo_cem_regra${numeroDaRegra}'>Abaixo de R$ 100,00</label>
                            </div>
                        </div>
                    </div>
                    <div class="container_tolerancia">
                        <h4 class="label_taxa">Tolerância:</h4>
                        <div class="container_input_tolerancia">
                            <p >até <input ${disabled} type="text" class="input_regra" id='input_tempo_tolerancia_regra${numeroDaRegra}' value = '${tolerancia}' maxlength="2" onkeypress="validarDigitacaoNumeros();">h de antecedência</p>
                        </div>
                    </div>
                    <div class="container_valor_taxa">
                        <h4 class="label_taxa" >Taxa sobre o valor do serviço:</h4>
                        <div class="container_input_valor_taxa">
                            <p ><input ${disabled} type="text" class="input_regra" id='input_valor_taxa_variada_regra${numeroDaRegra}' value='${taxa}' maxlength="2" onkeypress="validarDigitacaoNumeros();"> %</p>
                        </div>
                    </div>
                </div>
            `
        
        conteinerRegras.appendChild(novaRegra)
    }

    const habilitarEdicao = () =>
    {
        ///// FAZER COM QUE OS NOVOS CARDS DE REGRAS FIQUEM DISPIONÍVEIS PARA EDICAO
        // alert("você vai editar");
        fecharContainer("btn_editar")
        abrirContainer("btn_salvar")
        abrirContainer("icone_adicao_regra")
        let inputs = document.getElementsByTagName("input");

        let textareas = document.getElementsByTagName("textarea")
        // console.log(typeof(inputs))
        
        const teste = Object.values(inputs)
        const textarea_obj = Object.values(textareas)

        let inputsHabilitados = teste.map((elemento)=>
        {
            habilitarInput(elemento)
        })

        let textareasHabilitadas = textarea_obj.map((elemento)=>
        {
            elemento.readOnly = false
        })
        document.getElementById("p_exclusao_cadastro").clickable
        // console.log(inputsHabilitados)
    }
    const habilitarInput = (input) =>
    {
        input.disabled = false
    }

    const excluirConta = () =>
    {
        const data = {};
        data["acao"] = 'desabilitarEmpresa';
        data["id_empresa"] = id_empresa;

        const options =
        {
            method : 'DELETE',
            body: JSON.stringify(data), //transforma o produto que era JSON em String, serializa
            headers: 
            {
                'content-type' : 'application/json'
            }
        }

        console.log(options);
         fetch(url, options).then(response => response.json()).then(data => {
            console.log(data)})

        // document.formulario_imagem.submit();
        alert("Sua conta foi excluída!")
        window.location.href = "../home/home.html";   
    }

    

    // const deletarRegraCancelamento = (idRegraCancelamento) =>
    // {
    //    const divDeletar = document.getElementById(`${idRegraCancelamento}`)
    //    const conteinerRegras = document.getElementById("container_regras_cancelamentos")
    //    conteinerRegras.removeChild(divDeletar)
    // }





// ***** EVENTOS ******

    link_perfil_estabelecimento.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_perfil_estabelecimento);
        descolorirLinks(link_perfil_estabelecimento);
    });
    link_perfil_administrador.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_perfil_administrador);
        descolorirLinks(link_perfil_administrador);
    });
    link_localizacao.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_localizacao);
        descolorirLinks(link_localizacao);
    });
    link_recebimento.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_recebimento);
        descolorirLinks(link_recebimento);
    });
    link_regra_negocio.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_regras_negocio);
        descolorirLinks(link_regra_negocio);
        const conteinerRegras = document.getElementById("container_regras_cancelamentos")
        numeroDaRegra = conteinerRegras.childElementCount
    });
    link_funcionamento.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_secao_funcionamento);
        descolorirLinks(link_funcionamento);
    });
    link_dados_login.addEventListener("click", ()=>{
        trocarVisualizacaoSecoes(container_login);
        descolorirLinks(link_dados_login);
    });

    radio_sim_regra_cancelmento.addEventListener("click", ()=>{
        abrirContainer("container_geral_regras");
    })
    radio_nao_regra_cancelmento.addEventListener("click", ()=>{
        fecharContainer("container_geral_regras");
    })

    radio_taxa_unica.addEventListener("click", () => 
    {
        abrirContainer("container_taxa_unica");
        fecharContainer('container_regras_cancelamentos')
        fecharContainer('icone_adicao_regra')
    })
    radio_taxa_variada.addEventListener("click", () => 
    {
        fecharContainer("container_taxa_unica");
        abrirContainer("container_regras_cancelamentos");
        abrirContainer("icone_adicao_regra");
    })

    radio_nao_regra_cancelmento.addEventListener("click", ()=>{
        fecharContainer("container_geral_regras");
    })

    radio_sim_intervalo.addEventListener("click", ()=>{
        abrirContainer("container_valor_intervalo");
    })
    radio_nao_intervalo.addEventListener("click", ()=>{
        fecharContainer("container_valor_intervalo");
    })

    btn_editar.addEventListener("click", habilitarEdicao)

    btn_salvar.addEventListener("click", async ()  => {

        // id_cidade = document.getElementById("id_cidade").value;

        const dados = testeUpdate(id_empresa)
        console.log(dados)
        const options =
        {
            method : 'POST',
            body: JSON.stringify(dados), //transforma o produto que era JSON em String, serializa
            headers: 
            {
                'content-type' : 'application/json'
            }
        }

        console.log(options);
         fetch(url, options).then(response => response.json()).then(data => {
            console.log(data)})

        // document.formulario_imagem.submit();
        alert("Alterações salvar com sucesso!")
        // location.reload();   
    })

    input_imagem.addEventListener("change", (tratarUploadImagem))

    icone_adicao_regra.addEventListener("click", () => {criarRegraCancelamento(null, '', '')})

    document.getElementById("p_exclusao_cadastro").addEventListener("click", ()=>
    {
        alert("Você vai excluir!")
        excluirConta();
    })

    document.getElementById("input_cep").addEventListener("keyup", preencherFormularioEndereco);

