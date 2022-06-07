"use strict"
import { mudar_secoes } from "./navegacao_secoes.js";
import { prepararDadosParaSalvar } from "./consumo.js";
import { preencherFormularioEndereco } from "../../../utils/cep.js";

const div_liso = document.getElementById("liso")
const div_ondulado = document.getElementById("ondulado")
const div_cacheado = document.getElementById("cacheado")
const div_crespo = document.getElementById("crespo")

const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/consumidor/conta/'

const verificarCorrespondenciaSenha = () => {
    const conteudo_senha = document.getElementById("input_senha").value
    const campo_confirmacao_senha = document.getElementById("input_confirmacao_senha")

    if (conteudo_senha === campo_confirmacao_senha.value) {
        campo_confirmacao_senha.style.borderBottom = "solid 0.5px green"
    }
    else {
        campo_confirmacao_senha.style.borderBottom = "solid 0.5px red"
    }
}

const desmarcarTipoCabelo = () => {
    const label_liso = document.getElementById("label_liso")
    const label_ondulado = document.getElementById("label_ondulado")
    const label_cacheado = document.getElementById("label_cacheado")
    const label_crespo = document.getElementById("label_crespo")

    const input_liso = document.getElementById("tipo_liso")
    const input_ondulado = document.getElementById("tipo_ondulado")
    const input_cacheado = document.getElementById("tipo_cacheado")
    const input_crespo = document.getElementById("tipo_crespo")


    console.log(input_liso.classList[1])
    console.log(input_ondulado.classList[1])
    console.log(input_cacheado.classList[1])
    console.log(input_crespo.classList[1])

    label_liso.style.color = "var(--fonte)"
    label_ondulado.style.color = "var(--fonte)"
    label_cacheado.style.color = "var(--fonte)"
    label_crespo.style.color = "var(--fonte)"

    label_liso.style.textDecoration = "none"
    label_ondulado.style.textDecoration = "none"
    label_cacheado.style.textDecoration = "none"
    label_crespo.style.textDecoration = "none"

    if (input_liso.classList[1]) {
        input_liso.classList.remove('tipo_cabelo_escolhido')
    }
    if (input_ondulado.classList[1]) {
        input_ondulado.classList.remove("tipo_cabelo_escolhido")
    }
    if (input_cacheado.classList[1]) {
        input_cacheado.classList.remove("tipo_cabelo_escolhido")
    }
    if (input_crespo.classList[1]) {
        input_crespo.classList.remove("tipo_cabelo_escolhido")
    }

    console.log(input_liso.classList[1])
    console.log(input_ondulado.classList[1])
    console.log(input_cacheado.classList[1])
    console.log(input_crespo.classList[1])

}



const destacarTipoCabelo = (label_tipo_escolhido, input_tipo_escolhido) => {

    desmarcarTipoCabelo()

    console.log(label_tipo_escolhido)
    document.getElementById(label_tipo_escolhido).style.color = "var(--verde_escuro)"
    document.getElementById(label_tipo_escolhido).style.textDecoration = "underline"
    document.getElementById(input_tipo_escolhido).classList.add("tipo_cabelo_escolhido")

    console.log(document.getElementById(input_tipo_escolhido).classList[1])

}


// ----------------- NAVEGAÇÃO
document.querySelector(".container_seta_anterior").addEventListener("click", () => { mudar_secoes("voltar") })
document.querySelector(".container_seta_proxima").addEventListener("click", () => {

    // console.log(document.querySelector(".container_seta_proxima").classList.contains("concluir"))
    if (document.querySelector(".container_seta_proxima").classList.contains("concluir")) {

        const dados = prepararDadosParaSalvar()
        console.log("Dados pegos nos campos sem a preparação para envio " + dados)
        const options =
        {
            method: 'POST',
            body: JSON.stringify(dados), //transforma o produto que era JSON em String, serializa
            headers:
            {
                'content-type': 'application/json'
            }
        }

        // let id_empresa_cadastrada = null

        console.log("Os seguintes dados serão enviados para a API " + options);
        fetch(url, options)
            .then(
                response => response.json()
            )
            .then(
                data => {
                    console.log(data)

                    console.log("envio do fetch")

                }
            )
        // .then
        //     (
        //         () =>
        //         {
        //             console.log("enviando formulario adm"),
        //             document.getElementById("campo_id_empresa_form_img_adm").value = id_empresa_cadastrada,
        //             console.log(document.getElementById("campo_id_empresa_form_img_adm").value)

        //             document.getElementById("formulario_imagem_administrador").submit()
        //         }

        //     ).then
        //     (
        //         () =>
        //         {
        //             console.log("enviando formulario salao"),
        //             document.getElementById("campo_id_empresa_form_img_salao").value = id_empresa_cadastrada,

        //             document.getElementById("formulario_imagem_salao").submit()
        //         }                        
        //     )



        // document.formulario_imagem.submit();
        alert("Alterações salvas com sucesso!")
        // location.reload();   
    }
    else {
        mudar_secoes("avancar")
    }
}
)

document.getElementById("input_confirmacao_senha").addEventListener("keyup", verificarCorrespondenciaSenha)

document.getElementById("input_cep").addEventListener("keyup", preencherFormularioEndereco);

div_liso.addEventListener('click', () => { destacarTipoCabelo('label_liso', 'tipo_liso') })
div_ondulado.addEventListener('click', () => { destacarTipoCabelo('label_ondulado', 'tipo_ondulado') })
div_cacheado.addEventListener('click', () => { destacarTipoCabelo('label_cacheado', 'tipo_cacheado') })
div_crespo.addEventListener('click', () => { destacarTipoCabelo('label_crespo', 'tipo_crespo') })