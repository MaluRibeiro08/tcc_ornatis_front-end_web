//fazer aparecer a imagem quando fizer upload

let photo_servico = document.getElementById('img_photo_servico');
let file = document.getElementById('fl_image_servico');

photo_servico.addEventListener('click', () => {
    file.click();
});


  file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo_servico.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

// const getCategorias = async () => {
//     const response = await fetch('http://10.107.144.22/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?acao=listarEspecialidades');
//     const categorias = await response.json();

//     console.log(categorias)

//     return getCategorias;
// }

// const categorias = getCategorias();
// console.log(categorias);

// //colocar os ids nos selects
// option.value = categoria[0].id
// option.text = categorias[0].nome_categoria


/**CONSUMO**/

//const

const input_titulo = document.getElementById('titulo_servico')
const input_preco = document.getElementById('preco_servico')
const input_promocao = document.getElementById('promocao_servico')
const input_detalhes = document.getElementById('detalhes_servico')
const input_tempo_producao = document.getElementById('tempo_producao_servico')
const image_servico = document.getElementById('fl_image_servico')
const radio_estabelecimento = document.getElementById('estabelecimento_servico')
const radio_domicilio = document.getElementById('domicilio_servico')
const select_publico_alvo = document.getElementById('publico_alvo')
const select_categoria = document.getElementById('categoria')
const select_parte_corpo = document.getElementById('parte_do_corpo')
const select_funcionario_realizador = document.getElementById('funcionario_realizador') 
const radio_servico_ativo = document.getElementById('servico_ativo')
const radio_servico_desativo = document.getElementById('servico_desativo')
const input_intervalo = document.getElementById('intervalo_servico')
const btn_salvar_servico = document.getElementById('salvar_servico')

//get de informacoes



const cadastro_servico = (data) =>{


    const options_servico = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options_servico).then(response => response.json()).then(
        data => 
        {
            const input_id_servico = document.getElementById("id_servico");

            input_id_servico.value = data.data;
        }
    );
};



const get_dados_servico = () => 
{
    const data = {};
    data ['acao'] = 'createServico';
    data ['nome_servico'] = input_titulo.value;
    data ['preco'] = input_preco.value;
    data ['desconto'] = input_promocao.value;
    data ['detalhes'] = input_detalhes.value;
    data ['tempo_duracao'] = input_tempo_producao.value;
    data ['imagem_servico'] = image_servico.value;
    data ['id_tipo_atendimento'] = radio_estabelecimento.value;
    data ['id_tipo_atendimento'] = radio_domicilio.value;
    data ['intervalo'] = input_intervalo.value;

    //verificando campo que foi selecionado do select

   
    
    return data
};  




btn_salvar_servico.addEventListener("click", 
    () =>
    {
        const dados = get_dados_servico();
        cadastro_servico(dados);
    }
)

 

$('.publico_alvo').change(function () {
    let n = $('.publico_alvo').val();
  
    //Operador lógico
    if (n == 5) {
      console.log('A 5ª opção foi selecionada!');
    }
  });









