let photo_funcionario = document.getElementById('img_photo_funcionario');
let file = document.getElementById('fl_image_funcionario');

photo_funcionario.addEventListener('click', () => {
    file.click();
});

//modal deduvida sobre os horarios

function abrir(){
    document.getElementById('popup').style.display = "block"
}

function fechar(){
    document.getElementById('popup').style.display = "none"
}

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

//while para testar checkbox

const checkbox_horarios = () => 
{
    let id_dia_semana = 1
    const funcionamento = [];

    while (id_dia_semana <8)
    {
        const check_dia_semana = document.getElementById(`input_dia_semana${id_dia_semana}`)
        if(check_dia_semana.checked == true)
        {
            funcionamento =
            {
                id_dia_semana: `${id_dia_semana}`,
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_dom').value,
                hora_termino: document.getElementById('1input_hora_termino_dom').value,
               
            }
        }
        id_dia_semana = id_dia_semana+1
    }
};

const salvar_funcionario = () => {
    const conta_funcionario =
    {
        nome: document.getElementById('nome_funcionario').value,
        email: document.getElementById('email_funcionario').value,
        senha: document.getElementById('senha_funcionario').value,
        foto: document.getElementById('fl_image_funcionario').src,
        btn_salvar_funcionario: document.getElementById('btn_salvar_funcionario').value,
        horario: checkbox_horarios()
        [
            //domingo
            {
                id_dia_semana: "1",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_1').value,
                hora_termino: document.getElementById('1input_hora_termino_1').value,
               
            },
            {
                id_dia_semana: "1",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_1').value,
                hora_termino: document.getElementById('2input_hora_termino_1').value,
            },
            //segunda
            {
                id_dia_semana: "2",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_2').value,
                hora_termino: document.getElementById('1input_hora_termino_2').value,
            },
            {
                id_dia_semana: "2",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_2').value,
                hora_termino: document.getElementById('2input_hora_termino_2').value,
            },
            //terca
            {
                id_dia_semana: "3",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_3').value,
                hora_termino: document.getElementById('1input_hora_termino_3').value,
            },
            {
                id_dia_semana: "3",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_3').value,
                hora_termino: document.getElementById('2input_hora_termino_3').value,
            },
            //quarta
            {
                id_dia_semana: "4",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_4').value,
                hora_termino: document.getElementById('1input_hora_termino_4').value,
            },
            {
                id_dia_semana: "4",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_4').value,
                hora_termino: document.getElementById('2input_hora_termino_4').value,
            },
            {
                id_dia_semana: "5",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_5').value,
                hora_termino: document.getElementById('1input_hora_termino_5').value,
               
            },
            {
                id_dia_semana: "5",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_5').value,
                hora_termino: document.getElementById('2input_hora_termino_5').value,
            },
            {
                id_dia_semana: "6",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_6').value,
                hora_termino: document.getElementById('1input_hora_termino_6').value,
            
            },
            {
                id_dia_semana: "6",
                //termino
                hora_inicio: document.getElementById('2input_hora_inicio_6').value,
                hora_termino: document.getElementById('2input_hora_termino_6').value,
            },
            {
                id_dia_semana: "7",
                //inicio
                hora_inicio: document.getElementById('1input_hora_inicio_7').value,
                hora_termino: document.getElementById('1input_hora_termino_7').value,
            },
            {
                id_dia_semana: "7",
                 //termino
                 hora_inicio: document.getElementById('2input_hora_inicio_7').value,
                 hora_termino: document.getElementById('2input_hora_termino_7').value,
            }
    
        ]
    };
    };
        
   
    

        console.log(conta_funcionario)
    cadastro_funcionario(conta_funcionario);
    
    // cadastro_funcionario(horarios);


const check = () =>
{
    const input_check_segunda_2 = document.getElementById("input_dia_semana_2");
    console.log(input.checked)
}