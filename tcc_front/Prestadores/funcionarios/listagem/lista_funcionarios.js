//abrir menu lateral

function abrir_menu(){
    document.getElementById('menu').style.width = '500px';
}

function fechar_menu(){
    document.getElementById('menu').style.width = '0px'
}

//modal editar

function abrirEditar(){
    document.getElementById('popup_editar').style.display = "block"
}

function fecharEditar(){
    document.getElementById('popup_editar').style.display = "none"
}

//modal excluir

function abrirExcluir(){
    document.getElementById('popup_excluir').style.display = "block"
}

function fecharExcluir(){
    document.getElementById('popup_excluir').style.display = "none"
}

//fazer aparecer a imagem quando fizer upload (MODAL EDITAR)

let photo_funcionario = document.getElementById('img_photo_funcionario');
let file = document.getElementById('fl_image_funcionario');

photo_funcionario.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo_funcionario.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

/*****CONSUMO DE API******/

const id_empresa = 19;
const id_funcionario = 1;
const btn_editar = document.getElementById('btn_editar');

/***fetch***/

const carregarFuncionarios =   (id_empresa) => fetch(`http://10.107.144.8/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)

const teste = async () =>
{
    const response = await carregarFuncionarios(id_empresa);
    // console.log(response)
    const informacoes = await response.json();
    console.log(informacoes);
}
teste();

// console.log("oi")

// console.log("tchau")

/**atibuindo ids diferentes para cada usuario**/


const novo_funcionario = document.createElement("div") 

novo_funcionario.id = `container_borda_funcionario${id_funcionario}`;

novo_funcionario.classList.add("container_borda_funcionario")
novo_funcionario.innerHTML = 
            `
            <div id="borda">
                    <div> <img id='foto_funcionario${id_funcionario}' class="foto" src="" alt=""> </div> 
                    <div id="dados_fun">
                        <div id='nome${id_funcionario}'><a href="../detalhes/detalhes_funcionario.html"><h4>Arielly Angelo</h4></a></div> 
                        <div id="editar_excluir">
                            <a href='javascript: abrirEditar(${id_funcionario});'><span id="edit"${id_funcionario} class="material-icons-outlined">edit </span></a>
                            <a href='javascript: abrirExcluir(${id_funcionario});><span id="delete"${id_funcionario} class="material-icons-outlined">delete </span></a>
                         </div>
                    </div>
                </div>
            `

/**ação de deletar funcionario**/

            const excluirFuncionario = (id_funcionario) =>
            {
                const data = {};
                data["acao"] = 'desabilitarFuncionario';
                data["id_funcionario"] = id_funcionario;
        
                const options =
                {
                    method : 'DELETE',
                    body: JSON.stringify(data), //transforma o produto que era JSON em String, serializa
                    headers: 
                    {
                        'content-type' : 'application/json'
                    }
                }
                 fetch(url, options).then(response => response.json()).then(data => {
                    console.log(data)})
        
                // document.formulario_imagem.submit();
                alert("Seu funcionario foi excluído!")
                window.location.href = "../listagem/lista_funcionarios.html";   
            }

/**ação editar funcionário**/

        




