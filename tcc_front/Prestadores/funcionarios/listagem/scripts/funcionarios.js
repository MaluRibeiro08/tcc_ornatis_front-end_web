const carregarFuncionarios =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)
const url = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/'

const listarFuncionarios = async (id_empresa) =>
{
    const response = await carregarFuncionarios(id_empresa);
    const informacoes = await response.json();
    
    return informacoes.data;
}

const listarDetalhesFuncionario = async (id_funcionario) =>
{
    const response = await fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_funcionario=${id_funcionario}&acao=listarDetalhesFuncionario`)
    const informacoes = await response.json()

    return informacoes;
}

const getDadosEditadosFuncionario = (id_empresa) => 
{
    const data = {};
    data['acao'] = 'updateFuncionario';
    data ['nome_funcionario'] = document.getElementById("input_nome_funcioanrio").value;
    data ['cod_funcionario'] = document.getElementById('input_cod_funcioanrio').value;
    data ['id_empresa'] = id_empresa;
    data ['id_funcionario'] =  document.getElementById('input_id_funcionario_editado').value;
    data["dados_dia_trabalho"] = getDiasTrabalho();
    
    return data
};

const verificarCheck = (id_elemento) =>  document.getElementById(`${id_elemento}`).checked

const getDiasTrabalho = () =>
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


const salvarDadosFuncionario = (id_empresa, id_funcionario) =>
{
    const data = getDadosEditadosFuncionario(id_empresa, id_funcionario);

    console.log(data)

    const options_funcionario = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch(url, options_funcionario).then(response => response.json()).then(
        data => 
        {
            console.log("Imprimindo response")
            console.log(data)
            console.log("Especificando impressao response")
            console.log(data.data)
            const input_id_funcionario = document.getElementById("id_funcionario");

            // input_id_funcionario.value = data.data;
        }
    ).then
    (
        () =>
        {
            console.log("enviando formulario adm"),
                    
            document.getElementById("formulario_imagem").submit()
        }
    ).then
    (
        () =>
        {
            console.log("Tudo certo")
            alert("Funcionário cadastrado com sucesso!!")
            location.reload()
        }
    );
}

const deletarFuncionario = (id_funcionario) =>
{
    console.log("vai apagar hehe")
    // alert("Testes")


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

    console.log(options);
        fetch(url, options).then(response => response.json()).then(data => {
        console.log(data)})

    // document.formulario_imagem.submit();
    // alert("Funcionario excluído com sucesso!")
    location.reload();

}

export {listarDetalhesFuncionario, listarFuncionarios, salvarDadosFuncionario, deletarFuncionario}