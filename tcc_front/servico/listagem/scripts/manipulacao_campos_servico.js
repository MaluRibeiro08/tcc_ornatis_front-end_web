"use strict"

import { abrirModalEdicao, abrirModalExclusao } from "./modais.js";
import { imagemPreview } from "../../../utils/imagem.js";
import { getServicosPorEmpresa, getEspecialidades, getParteCorpoPorEspecialidade, getPartesCorpo} from "./servico.js";
import { listarFuncionarios } from "./funcionarios.js";


let arr_especialidades_partes_corpo = {};
const url_imagem_funcionario = 'http://localhost/tcc_ornatis_back-end/api-ornatis/upload/foto_perfil_funcionario/'
const url_imagem_servico = 'http://localhost/tcc_ornatis_back-end/api-ornatis/upload/imagem_servico/'
const url_servico = 'http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/adm/servico/'

let id_empresa = null;


const construirSelect = (id_elemento_select, opcoes, assunto) =>
{
    const select = document.getElementById(id_elemento_select);

    if (assunto == "especialidades") 
    {
        opcoes.map((elemento)=>
        {

            const novaOpcao = document.createElement("option")

            novaOpcao.value = elemento.id_especialidade
            novaOpcao.id = "option_especialidade_"+ elemento.id_especialidade

            novaOpcao.innerText = elemento.nome_especialidade
            select.appendChild(novaOpcao)
        })
    }
    if (assunto == "partes_corpo") 
    {
        let contador = 0;

        while (contador < Object.keys(opcoes).length) 
        {
           const info_parte_corpo = opcoes[`${contador}`];

           const novaOpcao = document.createElement("option");

           novaOpcao.value = info_parte_corpo.id_parte_corpo;
           novaOpcao.id = "option_parte_corpo_" + info_parte_corpo.id_parte_corpo;
           novaOpcao.classList.add("options_partes_corpos");
           novaOpcao.disabled = true;

           novaOpcao.innerText = info_parte_corpo.nome_parte_corpo;
           select.appendChild(novaOpcao);

           contador = contador+1;
        }
    }
    
}

const criar_card_funcionario = (elemento) =>
{
    const container_mae = document.querySelector("#container_funcionarios_cadastro_servico")
    const novoCard = document.createElement("div")

    novoCard.classList.add("card_funcionario")
    novoCard.classList.add(`card_funcionario_${elemento["id_funcionario"]}`)
    novoCard.id = `${elemento["id_funcionario"]}`

    novoCard.innerHTML = 
    `
        <div class="container_img_funcionario">
            <img src="${url_imagem_funcionario}${elemento["foto_perfil"]}" alt="Foto Funcionario">
        </div>
        <div class="container_nome_funcionario">
            <p>${elemento["nome_funcionario"]}</p>
        </div>
    `
    container_mae.appendChild(novoCard)
    console.log(novoCard)
    // console.log(elemento)
}

const criarListaFuncionarios = async (id_empresa) =>
{
    const dados = await listarFuncionarios(id_empresa);

    dados.data.map((elemento) =>
    {
        criar_card_funcionario(elemento)
    })    
}

const definirSelecaoFuncionario = (alvo) =>
{
    if(alvo.classList.contains("funcionario_selecionado"))
    {
        alvo.classList.remove("funcionario_selecionado")
    }
    else
    {
        alvo.classList.add("funcionario_selecionado")
    }
}

const construirTelaCadastro = async(id_empresa_recebido) =>
{
    id_empresa = id_empresa_recebido;

    //ESPECIALIDADES E PARTES DO CORPO
        const arr_especialidades =  await getEspecialidades();
        construirSelect("select_especialidade", arr_especialidades, "especialidades")


        arr_especialidades.map(async (elemento) =>
        {
            const partes_corpo = await getParteCorpoPorEspecialidade(id_empresa, elemento.id_especialidade);
            const id_especialidade = elemento.id_especialidade;

            arr_especialidades_partes_corpo[`${id_especialidade}`] = partes_corpo;

        })


        const partes_corpo = await getPartesCorpo();
        construirSelect("select_parte_corpo", partes_corpo, "partes_corpo")

    // FUNCIONARIOS
        await criarListaFuncionarios(id_empresa);

        const elementos = document.getElementsByClassName("card_funcionario")
        const arr_cards = [...elementos]

        console.log(arr_cards);
        arr_cards.map((card) =>
        {
            card.addEventListener("click",
                (evento) => 
                {
                    if(evento.target.classList.contains("card_funcionario"))
                    {
                        definirSelecaoFuncionario(evento.target)
                    }
                    else if(evento.target.classList.contains("container_img_funcionario") || evento.target.classList.contains("container_nome_funcionario"))
                    {
                        console.log(evento.target.parentNode)
                        definirSelecaoFuncionario(evento.target.parentNode)
                    }
                    else
                    {
                        definirSelecaoFuncionario(evento.target.parentNode.parentNode)

                    }
                }
            )
        })

}

const criar_filtro_especialidade = (id_especialidade, nome_especialidade) =>
{
    const container_mae = document.getElementById("container_filtros");
    const container_filtro_especialidade = document.createElement("div");

    container_filtro_especialidade.classList.add("container_filtro");
    // container_filtro_especialidade.classList.add("filtro_selecionado");
    container_filtro_especialidade.id = `filtro_especialidade_${id_especialidade}`;

    container_filtro_especialidade.innerHTML = 
    `
        <span>${nome_especialidade}</span>
    `;

    container_filtro_especialidade.addEventListener("click", (evento)=>
    {
        alterarFiltragemServicosPorEspecialidade(id_especialidade)
    })

    container_mae.appendChild(container_filtro_especialidade);
}

const alterarFiltragemServicosPorEspecialidade = (id_especialidade) =>
{
    const campo_filtro = document.getElementById(`filtro_especialidade_${id_especialidade}`);

    //VERIFICANDO SE ESTAREI FILTRANDO OU "DESFILTRANDO"
    if (campo_filtro.classList.contains("filtro_selecionado")) 
    {
        //TIRA A SELEÇÃO DO FILTRO
            campo_filtro.classList.remove("filtro_selecionado")

        //SELECIONA TODOS OS CONTAINERS DE LISTAGEM
            const arr_container_listagens_especialidades = Array.prototype.slice.call(document.getElementsByClassName("container_listagem_especialidade"))

        //DEIXA TODOS OS CONTAINERS VISIVEIS
            arr_container_listagens_especialidades.map(
                (elemento)=>
                {
                    elemento.style.display = "flex";
                }
            )
    }
    else
    {
        //TIRANDO OUTROS POSSÍVEIS FILTROS
            const arr_container_listagens_especialidades = Array.prototype.slice.call(document.getElementsByClassName("container_listagem_especialidade"))
            arr_container_listagens_especialidades.map((elemento)=> elemento.style.display = "flex")
    
            const arr_container_filtros_especialidades = Array.prototype.slice.call(document.getElementsByClassName("container_filtro"))
            arr_container_filtros_especialidades.map((elemento)=> elemento.classList.remove("filtro_selecionado"))
    
        //ESTABELECENDO FLTRAGEM
            //ESTABELECE A SELEÇÃO DO FILTRO
                campo_filtro.classList.add("filtro_selecionado")

            //SELECIONA TODOS OS CONTAINERS QUE NÃO NÃO DIZEM RESPEITO AO FILTRO E ESCONDE-OS
                const arr_containers_especialidades_nao_desejadas = arr_container_listagens_especialidades.filter(
                    (elemento) =>
                    {
                        const id_elemento = elemento.id
                        const id_especialidade_elemento = id_elemento.substring(id_elemento.lastIndexOf("_")+1, id_elemento.length)
                        return id_especialidade_elemento != id_especialidade
                    }
                )
                arr_containers_especialidades_nao_desejadas.map((elemento)=> elemento.style.display = "none")
}
}


const criar_container_especialidade = (id_especialidade, nome_especialidade) =>
{
    const container_mae = document.getElementById("container_geral_listagem_servicos");
    const container_especialidade = document.createElement("div");

    container_especialidade.classList.add("container_listagem_especialidade");
    container_especialidade.id = `container_listagem_especialidade_${id_especialidade}`;

    container_especialidade.innerHTML = 
    `
        <div class="container_titulo_especialidade">
            <h2>${nome_especialidade}</h2>
        </div>

        <div  class="container_listagem" id="listagem_especialidade_${id_especialidade}">            
            
        </div>

    `;

    container_mae.appendChild(container_especialidade)
    console.log(document.getElementById(`listagem_especialidade_${id_especialidade}`))

    return document.getElementById(`listagem_especialidade_${id_especialidade}`)
}

const criar_card_servico = (servico) =>
{
    // console.log(servico)

    const card_servico = document.createElement("div");

    card_servico.classList.add("card_servico");
    card_servico.id = `id_servico${servico.id_servico}`;
    const servico_disponivel_pra_uso = servico.ativo_para_uso == 1 ? "checked" : "";

    //VERIFICANDO DESCONTO
    let preco_servico_tratado = parseFloat(servico.preco).toFixed(2);
    let situacao_desconto = 'style="display: none;"'

    if(servico.desconto != 0 && servico.desconto != null)
    {
        preco_servico_tratado = (servico.preco - (servico.preco * (servico.desconto/100))).toFixed(2);
        situacao_desconto = "";
    }

    console.log(servico.preco)

    card_servico.innerHTML = 
    `
        <div class="container_informacoes_servico">
            <h4 class="nome_servico">${servico.nome_servico}</h4>
            <div class="container_duracao_servico">
                <p>Duração:</p>
                <p class="duracao_servico">${servico.tempo_duracao} min</p>
            </div>
        </div>
        <div class="container_preco_servico">
                                            
            <p>R$ ${preco_servico_tratado.toString().replace(".", ",")}</p>
            <div class="container_desconto" ${situacao_desconto}>
                <P class="preco_sem_desconto"> R$ ${parseFloat(servico.preco).toFixed(2).toString().replace(".", ",")} | </P>
                <P class="desconto_valor_servico">-${servico.desconto}%</P>
            </div>
            
        </div>
        <div class="container_acoes_servico">
            <span class="material-symbols-outlined botao_exclusao" id="delete_${servico.id_servico}">delete</span>
            <span class="material-symbols-outlined botao_edicao" id="edit_${servico.id_servico}">edit</span>
        </div>
    `;

    return(card_servico)
}

const listarServicosSalao = async (id_empresa) =>
{
    const servicos = await getServicosPorEmpresa(id_empresa);

    console.log(servicos)

    let contador =0;
    if (servicos.length != 0 && servicos != null) 
    {
        while (contador < servicos.length) 
        {
            const id_especialidade_do_servico = servicos[contador].id_especialidade;
            const nome_especialidade_do_servico = servicos[contador].nome_especialidade;

            //VERIFICANDO SE HÁ UM CONTAINER PRA ESPECIALIDADE DO SERVICO
            const container_servicos_especialidade = document.getElementById(`listagem_especialidade_${id_especialidade_do_servico}`)
            if(container_servicos_especialidade == null) // se não tiver, cria e coloca dentro
            {
                criar_filtro_especialidade(id_especialidade_do_servico, nome_especialidade_do_servico)
                const container_especialidade = criar_container_especialidade(id_especialidade_do_servico, nome_especialidade_do_servico);
                const card_servico = criar_card_servico(servicos[contador]);
                container_especialidade.appendChild(card_servico)
            }
            else //se tiver, coloca o servico dentro
            {
                const card_servico = criar_card_servico(servicos[contador]);
                container_servicos_especialidade.appendChild(card_servico)        
            }

            contador = contador+1;
        }

        const container_avisos = document.getElementById("container_aviso_sem_servico");
        container_avisos.style.display = "none"; //tirando aviso de "sem serviços"

        const arr_switches = Array.prototype.slice.call(document.getElementsByClassName("switch_ativacao_servico"))
        arr_switches.map(
            (elemento)=>
            {
                elemento.addEventListener("click", (evento)=>{mudarEstadoServico(evento.target.id)})
            }
        )

        const arr_bototoes_exclusao  =  Array.prototype.slice.call(document.getElementsByClassName("botao_exclusao"))
        arr_bototoes_exclusao.map
        (
            (botao) => 
            {
                botao.addEventListener("click", 
                (evento) => abrirModalExclusao(botao.id.substring(botao.id.lastIndexOf("_")+1, botao.id.length)))
            }
        )

        const arr_bototoes_edicao  =  Array.prototype.slice.call(document.getElementsByClassName("botao_edicao"))
        arr_bototoes_edicao.map
        (
            (botao) => 
            {
                botao.addEventListener("click", 
                (evento) => abrirModalEdicao(botao.id.substring(botao.id.lastIndexOf("_")+1, botao.id.length)))
            }
        )
        
        
    }

    
}

const tratarUploadImagem = ({target}) =>
{
    // console.log("chegou")
    imagemPreview(target.id, "imagem_servico");
    document.getElementById("imagem_servico").style.display = "flex";
    document.getElementById("icone_add_imagem_servico").style.display = "none";
};

const getFuncionarios = () => 
{
   const arr_funcionarios_existentes = Array.prototype.slice.call(document.getElementById("container_funcionarios_cadastro_servico").children);
   
   const arr_funcionarios_selecionados = [];

   let contador = 0;
   while (contador < arr_funcionarios_existentes.length) 
   {
       if (arr_funcionarios_existentes[contador].classList.contains("funcionario_selecionado"))
       {
           arr_funcionarios_selecionados.push
           (
               {"id_funcionario":arr_funcionarios_existentes[contador].id}
           )
       }
        console.log(arr_funcionarios_selecionados)
        contador = contador+1;
   }

    return arr_funcionarios_selecionados;
}

const getGeneros = () =>
{
    const arr_generos = [];
    if(document.getElementById("select_publico_alvo").value == "todos")
    {
        arr_generos.push({"id_genero":1});
        arr_generos.push({"id_genero":2});
        
    }
    else
    {
        arr_generos.push({"id_genero":document.getElementById("select_publico_alvo").value});
    }
   
    console.log(arr_generos);
    return arr_generos;
}

const getTiposAtendimentos = () =>
{
    const arr_tipos_atendimento = [];

    const id_local_2 = "input_opcao_local2"
    const id_local_1 = "input_opcao_local1"

    if(document.getElementById(id_local_2).checked)
    {

        const ultima_letra_l = id_local_2.lastIndexOf("l")
        const ultimoCaracter = id_local_2.length
        
        const id_tipo_atendimento = id_local_2.substring(ultima_letra_l+1, ultimoCaracter)

       arr_tipos_atendimento.push({"id_tipo_atendimento": id_tipo_atendimento});
    }
    if(document.getElementById(id_local_1).checked)
    {

        const ultima_letra_l = id_local_1.lastIndexOf("l")
        const ultimoCaracter = id_local_1.length
        
        const id_tipo_atendimento = id_local_1.substring(ultima_letra_l+1, ultimoCaracter)

       arr_tipos_atendimento.push({"id_tipo_atendimento": id_tipo_atendimento});
    }
    
    return arr_tipos_atendimento;
}

const pegarDadosServico = (id_empresa) =>
{
    const data = {};
    data['acao'] = 'createServico';
    data['id_empresa'] = id_empresa;
    data['nome_servico'] = document.getElementById('input_titulo_servico').value;
    data['tempo_duracao'] = document.getElementById('input_duracao_servico').value;
    data['desconto'] = document.getElementById('input_desconto').value;
    data['intervalo'] = document.getElementById('input_intervalo').value;
    data['preco'] = document.getElementById('input_preco_servico').value.replace(".", "").replace(',', '.');
    data['detalhes'] = document.getElementById('input_observacoes').value;
    data['id_especialidade'] = document.getElementById("select_especialidade").value;
    data['id_parte_corpo'] = document.getElementById("select_parte_corpo").value;
    data['ativo_para_uso'] = '1';
    data['funcionarios'] = getFuncionarios();
    data['generos'] = getGeneros();
    data['tipos_atendimento'] = getTiposAtendimentos();

    return data
}
const setarDadosServicoCampos = (dados) =>
{

    console.log("eis os dados: ")
    console.log(dados);

    if(dados["dados_servico"][0]["imagem_servico"] != null || dados["dados_servico"][0]["imagem_servico"] != undefined ||  dados["dados_servico"][0]["imagem_servico"] != "" )
    {
        document.getElementById('imagem_servico').src = `${url_imagem_servico}${dados["dados_servico"][0]["imagem_servico"]}`
        document.getElementById('imagem_servico').style.display = "flex"
        document.getElementById("icone_add_imagem_servico").style.display = "none"
        document.getElementById("input_imagem_servico").src = `${url_imagem_servico}${dados["dados_servico"][0]["imagem_servico"]}`
    }
    
    document.getElementById('input_titulo_servico').value = dados["dados_servico"][0]["nome_servico"];
    document.getElementById('input_duracao_servico').value = dados["dados_servico"][0]["tempo_duracao"];
    document.getElementById('input_desconto').value = dados["dados_servico"][0]["desconto"];
    document.getElementById('input_intervalo').value = dados["dados_servico"][0]["intervalo"];
    document.getElementById('input_observacoes').value = dados["dados_servico"][0]["detalhes"];

    const preco_servico_tratado = parseFloat(dados["dados_servico"][0]["preco"]).toFixed(2).toString().replace(".", ",");
    document.getElementById('input_preco_servico').value = preco_servico_tratado;

    //ESPECIALIDADE
        const id_especialidade = dados["dados_servico_especialidade"][0]["id_especialidade"];
        document.getElementById(`option_especialidade_${id_especialidade}`).selected = true

    //PARTE DO CORPO
        const id_parte_corpo = dados["dados_servico_especialidade"][0]["id_parte_corpo"];
        document.getElementById(`option_parte_corpo_${id_parte_corpo}`).selected = true
    
    //FUNCIONARIOS QUE REALIZAM O SERVIÇO 
        const arr_funcionarios_existentes = Array.prototype.slice.call(document.getElementById("container_funcionarios_cadastro_servico").children);
        arr_funcionarios_existentes.map((elemento)=>elemento.classList.remove("funcionario_selecionado"))

        let contadorFuncionarios = 0;

        while (contadorFuncionarios < dados["dados_servico_funcionarios"].length) 
        {
            arr_funcionarios_existentes.map(
                (elemento) =>
                {
                    if(elemento.id == dados["dados_servico_funcionarios"][contadorFuncionarios]["id_funcionario"])
                    {
                        elemento.classList.add("funcionario_selecionado")
                    }
                }
            )
            contadorFuncionarios = contadorFuncionarios+1
        }


    //GENEROS
        console.log('oia os generos aí gente!')
        console.log(dados)
        if(dados["dados_servico_generos"].length ==2)
        {
            document.getElementById("option_todos_generos").selected = true
        }
        else
        {
            document.getElementById(`option_genero_${dados["dados_servico_generos"][0]["id_genero"]}`).selected = true
        }

    //TIPOS ATENDIMENTO
        document.getElementById(`input_opcao_local1`).checked = false

        document.getElementById(`input_opcao_local2`).checked = false

        let contadorLocais = 0;
        if(dados["dados_servico_tipo_atendimento"].length != 0) 
        {
            while (contadorLocais < dados["dados_servico_tipo_atendimento"].length)
            {
                document.getElementById(`input_opcao_local${dados["dados_servico_tipo_atendimento"][contadorLocais]["id_tipo_atendimento"]}`).checked = true
                contadorLocais = contadorLocais+1
            }
        }
}

const reorganizarOpcoesSelectPartesCorpo = (opcao_escolhida) =>
{
    //FECHANDO OS DESNECESSARIOS
    const elementos = document.getElementsByClassName("options_partes_corpos")
    const arr_options = [...elementos]
    arr_options.map((elemento)=> elemento.disabled = true)
    let selecionado = false;

    //DISPONIBILIZANDO OS NECESSÁRIOS
    arr_especialidades_partes_corpo[opcao_escolhida].map(
        (elemento)=>
        {
            document.getElementById(`option_parte_corpo_${elemento.id_parte_corpo}`).disabled = false;
            if(selecionado == false)
            {
                document.getElementById(`option_parte_corpo_${elemento.id_parte_corpo}`).selected = true;
                selecionado = true;
            }
        }

    )
}


document.getElementById("input_imagem_servico").addEventListener("change", (tratarUploadImagem));


document.getElementById('select_especialidade').addEventListener('input', (evento) => reorganizarOpcoesSelectPartesCorpo(evento.target.value))
export {listarServicosSalao, construirTelaCadastro, pegarDadosServico, setarDadosServicoCampos}