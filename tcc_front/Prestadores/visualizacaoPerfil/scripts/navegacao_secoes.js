"use sctric"

const mudarVisualizacaoSecao = (container_link_destino) =>
{
    // console.log(container_link_destino.id);
    const ultimo_underline = container_link_destino.id.lastIndexOf("_")
    const ultimoCaracter = container_link_destino.id.length

    const destino = container_link_destino.id.substring(ultimo_underline+1,ultimoCaracter)
    console.log(destino);

    const verificar_presenca_id = (value) => value.id.includes(destino) ? false : true;
    const verificar_presenca_classe = (value) => value.classList.contains(destino) ? false : true;

    //TROCAR SECAO VISIVEL
        const arr_secoes_nao_requeridas = Array.prototype.slice.call(document.getElementsByClassName("container-global-conteudo")).filter(verificar_presenca_id);
        arr_secoes_nao_requeridas.map((elemento) => {elemento.style.display = "none"})

        document.getElementById(`container-global-conteudo-${destino}`).style.display = "flex"
    
    //TROCAR LINK ENFATIZADO
        const arr_links_nao_clicados = Array.prototype.slice.call(document.getElementsByClassName("container_link_navegacao")).filter(verificar_presenca_classe);
        arr_links_nao_clicados.map((elemento) => {elemento.classList.add("link_nao_selecionado"); elemento.classList.remove("link_selecionado")})

        container_link_destino.classList.remove("link_nao_selecionado")
        container_link_destino.classList.add("link_selecionado")

}

export{mudarVisualizacaoSecao}