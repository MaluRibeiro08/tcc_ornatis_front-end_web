"use strict"
import {mudar_secoes} from "./navegacao_secoes.js"
import { imagemPreview } from "../../../utils/imagem.js";
import {prepararDadosParaSalvar} from "./manipulacao_dados_criacao_conta.js";
import { preencherFormularioEndereco } from "../../../utils/cep.js";
import { mudancaCheckDiaFuncionamento } from "./funcionamento_dinamizacao.js";

const radio_sim_regra_cancelmento = document.getElementById('input_radio_sim_cancelamento')
const radio_nao_regra_cancelmento = document.getElementById('input_radio_nao_cancelamento')

const radio_sim_intervalo = document.getElementById('input_radio_sim_intervalo')
const radio_nao_intervalo = document.getElementById('input_radio_nao_intervalo')

const radio_taxa_unica = document.getElementById('input_radio_taxa_unica')
const radio_taxa_variada = document.getElementById('input_radio_variada')

const icone_adicao_regra = document.getElementById('icone_adicao_regra')
let numeroDaRegra = null

const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/contaAdministradora/'


const tratarUploadImagem = ({target}) =>
{

    if(target.id == "input_foto_estabelecimento")
    {
        imagemPreview(target.id, "img_estabelecimento");
    }
    else if (target.id == "input_foto_administrador")
    {
        imagemPreview(target.id, "img_administrador");
    }
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
                <span id="icone_delecao_regra${numeroDaRegra}" class="material-symbols-outlined icone_delecao_regra" onclick="deletarRegraCancelamento('container_regra${numeroDaRegra}')" >
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

const verificarCorrespondenciaSenha = () => 
{
    const conteudo_senha = document.getElementById("input_senha").value
    const campo_confirmacao_senha = document.getElementById("input_confirmacao_senha")

    if(conteudo_senha === campo_confirmacao_senha.value)
    {
        campo_confirmacao_senha.style.borderBottom = "solid 0.5px green"
    }
    else
    {
        campo_confirmacao_senha.style.borderBottom = "solid 0.5px red"
    }
}

// ------------------ PREVIEW IMAGEM
    document.getElementById("input_foto_estabelecimento").addEventListener("change", (tratarUploadImagem))
    document.getElementById("input_foto_administrador").addEventListener("change", (tratarUploadImagem))


// ----------------- NAVEGAÇÃO
    document.querySelector(".container_seta_anterior").addEventListener("click", () => {mudar_secoes("voltar")})
    document.querySelector(".container_seta_proxima").addEventListener("click", () => 
        {
        
            // console.log(document.querySelector(".container_seta_proxima").classList.contains("concluir"))
            if(document.querySelector(".container_seta_proxima").classList.contains("concluir"))
            {

                const dados = prepararDadosParaSalvar()
                console.log("Dados pegos nos campos sem a preparação para envio " + dados)
                const options =
                {
                    method : 'POST',
                    body: JSON.stringify(dados), //transforma o produto que era JSON em String, serializa
                    headers: 
                    {
                        'content-type' : 'application/json'
                    }
                }

                let id_empresa_cadastrada = null
        
                console.log("Os seguintes dados serão enviados para a API " + options);
                 fetch(url, options)
                    .then(
                            response => response.json()
                         )
                    .then(
                             data => {
                                console.log(data)

                                console.log(data.data.dados_empresa.lastInsertId)
                                console.log("envio do fetch")

                                id_empresa_cadastrada = data.data.dados_empresa.lastInsertId

                                document.getElementById("campo_id_empresa_form_img_adm").value = id_empresa_cadastrada
                                document.getElementById("campo_id_empresa_form_img_salao").value = id_empresa_cadastrada
                            }
                    ).then
                    (
                        () =>
                        {
                            console.log("enviando formulario adm"),
                            document.getElementById("campo_id_empresa_form_img_adm").value = id_empresa_cadastrada,
                            console.log(document.getElementById("campo_id_empresa_form_img_adm").value)
                                    
                            document.getElementById("formulario_imagem_administrador").submit()
                        }
                        
                    ).then
                    (
                        () =>
                        {
                            console.log("enviando formulario salao"),
                            document.getElementById("campo_id_empresa_form_img_salao").value = id_empresa_cadastrada,
                                    
                            document.getElementById("formulario_imagem_salao").submit()
                        }                        
                    )
                
                
                
                // document.formulario_imagem.submit();
                alert("Alterações salvar com sucesso!")
                // location.reload();   
            }
            else
            {
                mudar_secoes("avancar")
            }
        }
    )

// ------------------ DECISOES - RADIOS

    radio_sim_regra_cancelmento.addEventListener("click", ()=>
    {
        abrirContainer("container_geral_regras");
    })
    
    radio_nao_regra_cancelmento.addEventListener("click", ()=>
    {
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

        // console.log(document.getElementById("container_regras_cancelamentos").childElementCount)
        if (document.getElementById("container_regras_cancelamentos").childElementCount == 0) 
        {
            criarRegraCancelamento(null, '', '')
        }
    })

    radio_nao_regra_cancelmento.addEventListener("click", ()=>
    {
        fecharContainer("container_geral_regras");
    })

    radio_sim_intervalo.addEventListener("click", ()=>
    {
        abrirContainer("container_valor_intervalo");
    })

    radio_nao_intervalo.addEventListener("click", ()=>
    {
        fecharContainer("container_valor_intervalo");
    })

// ------------------ OUTROS
    document.getElementById("input_confirmacao_senha").addEventListener("keyup", verificarCorrespondenciaSenha)

    icone_adicao_regra.addEventListener("click", () => {criarRegraCancelamento(null, '', '')})

    document.getElementById("input_cep").addEventListener("keyup", preencherFormularioEndereco);

