'use strict'


const trocarTipoLogin = (tipo_selecionado) =>
{
    if(tipo_selecionado == 'consumidor')
    {
        //tirando o outro
            document.getElementById("header_prestador").classList.remove("header_selecionado")
            document.getElementById("header_prestador").classList.add("header_nao_selecionado")

        //add o atual
            document.getElementById("header_consumidor").classList.add("header_selecionado")
            document.getElementById("header_consumidor").classList.remove("header_nao_selecionado")
            document.getElementById("tipo_login_selecionado").value = "consumidor"
            document.getElementById("link_cadastro").href = "../consumidores/cadastro/cadastro_consumidor.html"

        console.log('Vamos para consumidor');
    }
    else if (tipo_selecionado == 'prestador')
    {
        //tirando o outro
            document.getElementById("header_consumidor").classList.remove("header_selecionado")
            document.getElementById("header_consumidor").classList.add("header_nao_selecionado")
       
        //add o atual
            document.getElementById("header_prestador").classList.add("header_selecionado")
            document.getElementById("header_prestador").classList.remove("header_nao_selecionado")
    
            document.getElementById("tipo_login_selecionado").value = "prestador"
            document.getElementById("link_cadastro").href = "../Prestadores/cadastro/cadastro_prestador.html"

        console.log('Vamos para consumidor');
    }
}

const fazerLogin = () =>
{
    const tipo_login_desejado = document.getElementById("tipo_login_selecionado").value

    if(tipo_login_desejado == "consumidor")
    {
        window.location.href = "../consumidores/home/home.html"
    }
    if(tipo_login_desejado == "prestador")
    {
        window.location.href = "../Prestadores/home/home.html"
    }
}

//EVENTOS

    //CLICK PARA ENTRAR
        document.getElementById("btn_entrar").addEventListener("click", fazerLogin)


    //TROCA TIPO LOGIN
        document.getElementById('item_prestador').addEventListener('click', ()=>
            {
                trocarTipoLogin('prestador')
            }
        )

        document.getElementById('item_consumidor').addEventListener('click', ()=>
            {
                trocarTipoLogin('consumidor')
            }
        )

        // document.getElementById('header_prestador').addEventListener('click', ()=>
        //     {
        //         trocarTipoLogin('prestador')
        //     }
        // )
        // document.getElementById('item_consumidor').addEventListener('click', ()=>
        //     {
        //         trocarTipoLogin('consumidor')
        //     }
        // )