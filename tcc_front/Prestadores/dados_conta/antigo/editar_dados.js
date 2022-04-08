"use strict"

function abrir_menu(){
    document.getElementById('menu').style.width = '500px';
}

function fechar_menu(){
    document.getElementById('menu').style.width = '0px'
}

const carregarDadosConta =   (id_empresa) => fetch(`http://localhost/tcc_ornatis_back-end/api-ornatis/rotas/contaAdministradora/?id_empresa=${id_empresa}&acao=carregarPerfil`)

const preencherCampos = async (id_empresa) =>
{
    const response = await carregarDadosConta(id_empresa);
    // console.log(response)
    const informacoes = await response.json();
    console.log(informacoes.data.dados_empresa[0]["nome_fantasia"])

}

preencherCampos(1);
//MUDAR DE DIV

//estabelecimento

document.getElementById('item0').addEventListener('click', () => {
    document.getElementById('s1').classList.add('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')
    document.getElementById('s3').classList.remove('itemSelecionado')
    document.getElementById('s4').classList.remove('itemSelecionado')
    document.getElementById('s5').classList.remove('itemSelecionado')
    document.getElementById('s6').classList.remove('itemSelecionado')
    document.getElementById('s7').classList.remove('itemSelecionado')

})

//adm

document.getElementById('item1').addEventListener('click', () => {
    document.getElementById('s2').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')
    document.getElementById('s3').classList.remove('itemSelecionado')
    document.getElementById('s4').classList.remove('itemSelecionado')
    document.getElementById('s5').classList.remove('itemSelecionado')
    document.getElementById('s6').classList.remove('itemSelecionado')
    document.getElementById('s7').classList.remove('itemSelecionado')

})

//

document.getElementById('item2').addEventListener('click', () => {
    document.getElementById('s3').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')
    document.getElementById('s4').classList.remove('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')
    document.getElementById('s5').classList.remove('itemSelecionado')
    document.getElementById('s6').classList.remove('itemSelecionado')
    document.getElementById('s7').classList.remove('itemSelecionado')


})

document.getElementById('item3').addEventListener('click', () => {
    document.getElementById('s4').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')
    document.getElementById('s3').classList.remove('itemSelecionado')
    document.getElementById('s5').classList.remove('itemSelecionado')
    document.getElementById('s6').classList.remove('itemSelecionado')
    document.getElementById('s7').classList.remove('itemSelecionado')

})

document.getElementById('item4').addEventListener('click', () => {
    document.getElementById('s5').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')
    document.getElementById('s3').classList.remove('itemSelecionado')
    document.getElementById('s4').classList.remove('itemSelecionado')
    document.getElementById('s6').classList.remove('itemSelecionado')
    document.getElementById('s7').classList.remove('itemSelecionado')


})

document.getElementById('item5').addEventListener('click', () => {
    document.getElementById('s6').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')
    document.getElementById('s3').classList.remove('itemSelecionado')
    document.getElementById('s4').classList.remove('itemSelecionado')
    document.getElementById('s5').classList.remove('itemSelecionado')
    document.getElementById('s7').classList.remove('itemSelecionado')


})

document.getElementById('item6').addEventListener('click', () => {
    document.getElementById('s7').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')
    document.getElementById('s3').classList.remove('itemSelecionado')
    document.getElementById('s4').classList.remove('itemSelecionado')
    document.getElementById('s5').classList.remove('itemSelecionado')
    document.getElementById('s6').classList.remove('itemSelecionado')


})

//CONSUMO DE API 

'use strict';

const dados_adm = async (adm) => {
    const url = `http://10.107.144.3/tcc_ornatis_back-end/api-ornatis/rotas/contaAdministradora/`;
};


// dados adm 

const consumo_estabelecimento = async () => {

        const estabelecimento = await dados_adm(adm);
        document.querySelector('#nome_fantasia').value = estabelecimento.nome;
        document.querySelector('#cnpj').value = estabelecimento.cnpj;
        document.querySelector('#telefone').value = estabelecimento.contato;
        document.querySelector('#biografia').value = estabelecimento.biografia;
    } 

document.querySelector('#adm')

