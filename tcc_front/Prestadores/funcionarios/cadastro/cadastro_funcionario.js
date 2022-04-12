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

//CONSUMO DE API

const cadastro_funcionario = (conta_funcionario) =>{
    const options_funcionario = {
        method: 'POST',
        body: JSON.stringify(conta_funcionario),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options_funcionario)
};

const salvar_funcionario = () => {
    const conta_funcionario = 
    {
        nome: document.getElementById('nome_funcionario').value,
        email: document.getElementById('email_funcionario').value,
        senha: document.getElementById('senha_funcionario').value,
        foto: document.getElementById('fl_image_funcionario').src,
        horario: 
        [
            //domingo
            {
                id_dia_semana: "1",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_dom').value,
                hora_termino: document.getElementById('1input_hora_termino_dom').value,
               
            },
            {
                id_dia_semana: "1",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_dom').value,
                hora_termino: document.getElementById('2input_hora_termino_dom').value,
            },
            //segunda
            {
                id_dia_semana: "2",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_seg').value,
                hora_termino: document.getElementById('1input_hora_termino_seg').value,
            },
            {
                id_dia_semana: "2",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_seg').value,
                hora_termino: document.getElementById('2input_hora_termino_seg').value,
            },
            //terca
            {
                id_dia_semana: "3",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_ter').value,
                hora_termino: document.getElementById('1input_hora_termino_ter').value,
            },
            {
                id_dia_semana: "3",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_ter').value,
                hora_termino: document.getElementById('2input_hora_termino_ter').value,
            },
            //quarta
            {
                id_dia_semana: "4",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_qua').value,
                hora_termino: document.getElementById('1input_hora_termino_qua').value,
            },
            {
                id_dia_semana: "4",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_qua').value,
                hora_termino: document.getElementById('2input_hora_termino_qua').value,
            },
            {
                id_dia_semana: "5",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_qui').value,
                hora_termino: document.getElementById('1input_hora_termino_qui').value,
               
            },
            {
                id_dia_semana: "5",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_qui').value,
                hora_termino: document.getElementById('2input_hora_termino_qui').value,
            },
            {
                id_dia_semana: "6",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_sex').value,
                hora_termino: document.getElementById('1input_hora_termino_sex').value,
            
            },
            {
                id_dia_semana: "6",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_sex').value,
                hora_termino: document.getElementById('2input_hora_termino_sex').value,
            },
            {
                id_dia_semana: "7",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_sab').value,
                hora_termino: document.getElementById('1input_hora_termino_sab').value,
            },
            {
                id_dia_semana: "7",
                 //termino
                 hora_inicio: document.getElementById('2input_hora_inicio_sab').value,
                 hora_termino: document.getElementById('2input_hora_termino_sab').value,
            },
    
        ]
   
    // }
    // const horarios = [
    //     {
    //         id_dia_semana: "1",
    //         //inicio
    //         dom_inicio1: document.getElementById('1input_hora_inicio_dom'),
    //         dom_termino1: document.getElementById('1input_hora_termino_dom'),
    //     },
    //      {
    //         id_dia_semana: "1",
    //         //termino
    //         dom_inicio2: document.getElementById('2input_hora_inicio_dom'),
    //         dom_termino2: document.getElementById('2input_hora_termino_dom'),
    //     },
    //     {
    //         id_dia_semana: "2",
    //         //inicio
    //         seg_inicio1: document.getElementById('1input_hora_inicio_seg'),
    //         seg_termino1: document.getElementById('1input_hora_termino_seg'),
    //         //termino
    //         seg_inicio2: document.getElementById('2input_hora_inicio_seg'),
    //         seg_termino2: document.getElementById('2input_hora_termino_seg'),

    //     },
    //     {
    //         id_dia_semana: "3",
    //         //inicio
    //         ter_inicio1: document.getElementById('1input_hora_inicio_ter'),
    //         ter_termino1: document.getElementById('1input_hora_termino_ter'),
    //         //termino
    //         ter_inicio2: document.getElementById('2input_hora_inicio_ter'),
    //         ter_termino2: document.getElementById('2input_hora_termino_ter'),
    //     },
    //     {
    //         id_dia_semana: "4",
    //         //inicio
    //         qua_inicio1: document.getElementById('1input_hora_inicio_qua'),
    //         qua_termino1: document.getElementById('1input_hora_termino_qua'),
    //         //termino
    //         qua_inicio2: document.getElementById('2input_hora_inicio_qua'),
    //         qua_termino2: document.getElementById('2input_hora_termino_qua'),
    //     },
    //     {
    //         id_dia_semana: "5",
    //         //inicio
    //         qui_inicio1: document.getElementById('1input_hora_inicio_qui'),
    //         qui_termino1: document.getElementById('1input_hora_termino_qui'),
    //         //termino
    //         qui_inicio2: document.getElementById('2input_hora_inicio_qui'),
    //         qui_termino2: document.getElementById('2input_hora_termino_qui'),
    //     },
    //     {
    //         id_dia_semana: "6",
    //         //inicio
    //         sex_inicio1: document.getElementById('1input_hora_inicio_sex'),
    //         sex_termino1: document.getElementById('1input_hora_termino_sex'),
    //         //termino
    //         sex_inicio2: document.getElementById('2input_hora_inicio_sex'),
    //         sex_termino2: document.getElementById('2input_hora_termino_sex'),
    //     },
    //     {
    //         id_dia_semana: "4",
    //         //inicio
    //         sab_inicio1: document.getElementById('1input_hora_inicio_sab'),
    //         sab_termino1: document.getElementById('1input_hora_termino_sab'),
    //         //termino
    //         sab_inicio2: document.getElementById('2input_hora_inicio_sab'),
    //         sab_termino2: document.getElementById('2input_hora_termino_sab'),
    }

    //     ]

        console.log(conta_funcionario)
    // cadastro_funcionario(conta_funcionario);
    // cadastro_funcionario(horarios);
};

const check = () =>
{
    const input = document.getElementById("input_dia_semana_2");
    console.log(input.checked)
}