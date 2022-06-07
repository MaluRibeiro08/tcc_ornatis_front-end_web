'use strict'


const trocarTipoLogin = (tipo_selecionado) =>
{
    if(tipo_selecionado == 'consumidor')
    {
        console.log('Vamos para consumidor');
    }
    else if (tipo_selecionado == 'prestador')
    {
        console.log('vamos para prestador');
    }
}


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