"use strict"
import { mudar_secoes } from "./navegacao_secoes.js";

// ----------------- NAVEGAÇÃO
document.querySelector(".container_seta_anterior").addEventListener("click", () => {mudar_secoes("voltar")})
document.querySelector(".container_seta_proxima").addEventListener("click", () => 
    {
    
        // console.log(document.querySelector(".container_seta_proxima").classList.contains("concluir"))
        if(document.querySelector(".container_seta_proxima").classList.contains("concluir"))
        {

            // const dados = prepararDadosParaSalvar()
            // console.log("Dados pegos nos campos sem a preparação para envio " + dados)
            // const options =
            // {
            //     method : 'POST',
            //     body: JSON.stringify(dados), //transforma o produto que era JSON em String, serializa
            //     headers: 
            //     {
            //         'content-type' : 'application/json'
            //     }
            // }

            // let id_empresa_cadastrada = null
    
            // console.log("Os seguintes dados serão enviados para a API " + options);
            //  fetch(url, options)
            //     .then(
            //             response => response.json()
            //          )
            //     .then(
            //              data => {
            //                 console.log(data)

            //                 console.log(data.data.dados_empresa.lastInsertId)
            //                 console.log("envio do fetch")

            //                 id_empresa_cadastrada = data.data.dados_empresa.lastInsertId

            //                 document.getElementById("campo_id_empresa_form_img_adm").value = id_empresa_cadastrada
            //                 document.getElementById("campo_id_empresa_form_img_salao").value = id_empresa_cadastrada
            //             }
            //     ).then
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
            alert("Alterações salvar com sucesso!")
            // location.reload();   
        }
        else
        {
            mudar_secoes("avancar")
        }
    }
)