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