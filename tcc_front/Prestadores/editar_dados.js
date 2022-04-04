function abrir_menu(){
    document.getElementById('menu').style.width = '500px';
}

function fechar_menu(){
    document.getElementById('menu').style.width = '0px'
}


//MUDAR DE DIV

document.getElementById('item0').addEventListener('click', () => {
    document.getElementById('s1').classList.add('itemSelecionado')
    document.getElementById('s2').classList.remove('itemSelecionado')

})

document.getElementById('item1').addEventListener('click', () => {
    document.getElementById('s2').classList.add('itemSelecionado')
    document.getElementById('s1').classList.remove('itemSelecionado')

})

























































// //MUDAR DE DIV PARA APARECER OS DADOS 


// //VARIAVEIS

// const mudar_div_dado = document.getElementById("mudar_div_dado");


// let idAuto

// //FUNCOES:

// const setMudar_div_estabelecimento = (evento) =>{

//     if(evento)
//     { 
//       mudar_dados()

//     }

//     mudar_div_dado.id = "container_dados_estabelecimento"
// }

// const setMudar_div_adm = (evento) =>{

//     if(evento)
//     { 
//       mudar_dados()

//     }

//     mudar_div_dado.id = "container_dados_adm"
// }


// const verficar_mudar_dados = () =>{
// let mudar_dados_div = ""

// if (mudar_dados.id.includes("script_estabelecimento"))
// {
//     mudar_dados_div = "estabelecimento"

// }

// else if(mudar_dados.id.includes("script_adm"))
// {
//     mudar_dados_div = "adm"
// }
// return mudar_dados_div
// }



// const trocar_mudar_dados_div = () => 
// {
//     const mudar_dados_div = verficar_mudar_dados()

//     if(mudar_dados_div == "estabelecimento")
//     {
//        setMudar_div_adm()
//     }
//     else if (mudar_dados_div == "adm")
//     {
//         setMudar_div_estabelecimento()
//     }
// }

// //eventos 

// document.getElementById("icon_editar1").addEventListener("click", setMudar_div_estabelecimento)
// document.getElementById("icon_editar2").addEventListener("click", setMudar_div_adm)
