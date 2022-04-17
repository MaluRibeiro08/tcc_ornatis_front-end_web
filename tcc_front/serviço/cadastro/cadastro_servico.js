let photo_servico = document.getElementById('img_photo_servico');
let file = document.getElementById('fl_image_servico');

photo_servico.addEventListener('click', () => {
    file.click();
});

//fazer aparecer a imagem quando fizer upload

  file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo_servico.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})