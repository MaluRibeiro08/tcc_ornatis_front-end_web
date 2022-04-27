
/****** POPUP E UPLOAD DE IMAGEM  *******/


let photo_funcionario = document.getElementById('img_photo_funcionario');
let file = document.getElementById('fl_image_funcionario');

photo_funcionario.addEventListener('click', () => {
    file.click();
});

//modal de duvida sobre os horarios

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
});



/***********CONSUMO DE API**********/

const input_nome_funcionario = document.getElementById('nome_funcionario')
const input_login_funcionario = document.getElementById('login_funcionario')
const input_senha_funcionario = document.getElementById('senha_funcionario')
const input_foto_funcionario = document.getElementById("fl_image_funcionario")
const input_dia_semana_1 = document.getElementById("input_dia_semana_1")
const input_dia_semana_2 = document.getElementById("input_dia_semana_2")
const input_dia_semana_3 = document.getElementById("input_dia_semana_3")
const input_dia_semana_4 = document.getElementById("input_dia_semana_4")
const input_dia_semana_5 = document.getElementById("input_dia_semana_5")
const input_dia_semana_6 = document.getElementById("input_dia_semana_6")
const input_dia_semana_7 = document.getElementById("input_dia_semana_7")
const btn_salvar_funcionario = document.getElementById("btn_salvar_funcionario")


const cadastro_funcionario = (data) =>{
    const options_funcionario = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options_funcionario)
};



const salvar_funcionario = () => {
    const data = {};
    data['acao'] = 'create';
        
            data ['nome_funcionario'] = input_nome_funcionario.value;
            data ['cod_funcionario'] = input_login_funcionario.value;
            data ['senha'] = input_senha_funcionario.value;
            data ['foto_perfil'] = input_foto_funcionario.src;
            // btn_salvar_funcionario: document.getElementById('btn_salvar_funcionario').value,
            
            return data
    };

    const verificarCheck = (id_elemento) =>  document.getElementById(`${id_elemento}`).checked

const getFuncionamento = () =>
{
    let dia_semana_contador = 1;
    let arr_dados_funcionamento = [];

    while(dia_semana_contador <= 7)
    {
        if(verificarCheck(`input_dia_semana${dia_semana_contador}`))
        {
            if(document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value != null &&
                document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value != '')
            {
                

                const hora_inicio = document.getElementById(`1input_hora_inicio${dia_semana_contador}`).value;
                const hora_termino = document.getElementById(`1input_hora_termino${dia_semana_contador}`).value;
                arr_dados_funcionamento.push(
                    {
                        "id_dia_semana" : dia_semana_contador,
                        "hora_inicio" : `${hora_inicio}`,
                        "hora_termino" : `${hora_termino}`
                    }
                )
            }
            if(document.getElementById(`2input_hora_inicio${dia_semana_contador}`).value != null &&
                document.getElementById(`2input_hora_inicio${dia_semana_contador}`).value != '')
            {
                const hora_inicio = document.getElementById(`2input_hora_inicio${dia_semana_contador}`).value;
                const hora_termino = document.getElementById(`2input_hora_termino${dia_semana_contador}`).value;
                arr_dados_funcionamento.push(
                    {
                        "id_dia_semana" : dia_semana_contador,
                        "hora_inicio" : `${hora_inicio}`,
                        "hora_termino" : `${hora_termino}`
                    }
                )
            }
            else
            {
                console.log("sem_horario")
            }
        }
        dia_semana_contador = dia_semana_contador+1;
    } 

    return arr_dados_funcionamento;
}

        
   











    
// const check = () =>
// {
//     const input_check_segunda_2 = document.getElementById("input_dia_semana_2");
//     console.log(input.checked)
// }



// horario: checkbox_horarios()
        // [
        //     //domingo
        //     {
        //         id_dia_semana: "1",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_1').value,
        //         hora_termino: document.getElementById('1input_hora_termino_1').value,
               
        //     },
        //     {
        //         id_dia_semana: "1",
        //         //termino
        //         hora_inicio: document.getElementById('2input_hora_inicio_1').value,
        //         hora_termino: document.getElementById('2input_hora_termino_1').value,
        //     },
        //     //segunda
        //     {
        //         id_dia_semana: "2",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_2').value,
        //         hora_termino: document.getElementById('1input_hora_termino_2').value,
        //     },
        //     {
        //         id_dia_semana: "2",
        //         //termino
        //         hora_inicio: document.getElementById('2input_hora_inicio_2').value,
        //         hora_termino: document.getElementById('2input_hora_termino_2').value,
        //     },
        //     //terca
        //     {
        //         id_dia_semana: "3",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_3').value,
        //         hora_termino: document.getElementById('1input_hora_termino_3').value,
        //     },
        //     {
        //         id_dia_semana: "3",
        //         //termino
        //         hora_inicio: document.getElementById('2input_hora_inicio_3').value,
        //         hora_termino: document.getElementById('2input_hora_termino_3').value,
        //     },
        //     //quarta
        //     {
        //         id_dia_semana: "4",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_4').value,
        //         hora_termino: document.getElementById('1input_hora_termino_4').value,
        //     },
        //     {
        //         id_dia_semana: "4",
        //         //termino
        //         hora_inicio: document.getElementById('2input_hora_inicio_4').value,
        //         hora_termino: document.getElementById('2input_hora_termino_4').value,
        //     },
        //     {
        //         id_dia_semana: "5",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_5').value,
        //         hora_termino: document.getElementById('1input_hora_termino_5').value,
               
        //     },
        //     {
        //         id_dia_semana: "5",
        //         //termino
        //         hora_inicio: document.getElementById('2input_hora_inicio_5').value,
        //         hora_termino: document.getElementById('2input_hora_termino_5').value,
        //     },
        //     {
        //         id_dia_semana: "6",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_6').value,
        //         hora_termino: document.getElementById('1input_hora_termino_6').value,
            
        //     },
        //     {
        //         id_dia_semana: "6",
        //         //termino
        //         hora_inicio: document.getElementById('2input_hora_inicio_6').value,
        //         hora_termino: document.getElementById('2input_hora_termino_6').value,
        //     },
        //     {
        //         id_dia_semana: "7",
        //         //inicio
        //         hora_inicio: document.getElementById('1input_hora_inicio_7').value,
        //         hora_termino: document.getElementById('1input_hora_termino_7').value,
        //     },
        //     {
        //         id_dia_semana: "7",
        //          //termino
        //          hora_inicio: document.getElementById('2input_hora_inicio_7').value,
        //          hora_termino: document.getElementById('2input_hora_termino_7').value,
        //     }
    
        // ]






// //while para testar checkbox

// const checkbox_horarios = () => 
// {
//     let id_dia_semana = 1
//     const funcionamento = [];

//     while (id_dia_semana <8)
//     {
//         const check_dia_semana = document.getElementById(`input_dia_semana${id_dia_semana}`)
//         if(check_dia_semana.checked == true)
//         {
//             funcionamento =
//             {
//                 id_dia_semana: `${id_dia_semana}`,
//                 //inicio
//                 hora_inicio: document.getElementById('1input_hora_inicio_dom').value,
//                 hora_termino: document.getElementById('1input_hora_termino_dom').value,
               
//             }
//         }
//         id_dia_semana = id_dia_semana+1
//     }
// };