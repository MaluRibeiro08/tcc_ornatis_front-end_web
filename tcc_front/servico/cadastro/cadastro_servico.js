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


/**CONSUMO**/

const getCategorias = async () => {
    const response = await fetch('http://10.107.144.22/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/?acao=listarEspecialidades&id_empresa=1');

    const informacoes = await response.json();
    const categorias = informacoes.data

    // console.log(categorias)

    return categorias;
}

const carregar_select_categorias = async () =>
{
    const categorias = await getCategorias();
    console.log(categorias[0]);
    console.log(categorias[0].id_especialidade);

    // console.log(categorias[1]);
    // console.log(categorias[1].id_especialidade);
    option.valor = categorias[1].id_especialidade;
    option.texto = categorias[1].nome_especialidade;
    option.valor = categorias[2].id_especialidade;
    option.texto = categorias[2].nome_especialidade;
    option.valor = categorias[3].id_especialidade;
    option.texto = categorias[3].nome_especialidade;
    option.valor = categorias[4].id_especialidade;
    option.texto = categorias[4].nome_especialidade;
}

carregar_select_categorias();


/**CONST**/


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


//get de informacoes

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

    return data
};  


// VALIDANDO SELECTS
 
function valida() { console.log("dados chegando")
    var slctpublico = document.getElementById("publico_alvo");
    var slctcategoria = document.getElementById("categoria");
    var slctpartedocorpo = document.getElementById("parte_do_corpo");
    var slctfuncionario = document.getElementById("funcionario_realizador");


    if (slctpublico.options[slctpublico.selectedIndex].value == "" ){
            alert("Selecione um publico antes de prosseguir");
    }
    if (slctcategoria.options[slctcategoria.selectedIndex].value == "" ){
        alert("Selecione uma categoria antes de prosseguir");
    }
    if (slctpartedocorpo.options[slctpartedocorpo.selectedIndex].value == "" ){
        alert("Selecione uma parte do corpo antes de prosseguir");
    }
    if (slctfuncionario.options[slctfuncionario.selectedIndex].value == "" ){
        alert("Selecione um funcionário antes de prosseguir");
    }

}   


btn_salvar_servico.addEventListener("click", 
    () =>
    {
        valida()
        const dados = get_dados_servico();
        cadastro_servico(dados);
    }
)








