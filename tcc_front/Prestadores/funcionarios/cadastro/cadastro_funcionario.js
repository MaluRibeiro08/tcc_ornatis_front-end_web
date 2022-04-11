let photo_funcionario = document.getElementById('img_photo_funcionario');
let file = document.getElementById('fl_image_funcionario');

photo_funcionario.addEventListener('click', () => {
    file.click();
});

//fazer aparecer a imagem quando fizer upload

  file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo_funcionario.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})