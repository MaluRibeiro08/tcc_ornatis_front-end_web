"use strict"

document.getElementById("input_dia_semana1").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})
document.getElementById("input_dia_semana2").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})
document.getElementById("input_dia_semana3").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})
document.getElementById("input_dia_semana4").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})
document.getElementById("input_dia_semana5").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})
document.getElementById("input_dia_semana6").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})
document.getElementById("input_dia_semana7").addEventListener('change', (evento) =>
{
    mudancaCheckDiaFuncionamento(evento.target)
})

const mudancaCheckDiaFuncionamento = (alvo) =>
{
    const dia_semana = alvo.id.substr(-1);
    // console.log(dia_semana);

    if(alvo.checked == true)
    {
        // console.log("ativou")
        document.getElementById(`container_horarios_dia${dia_semana}`).style.display = 'flex'
    }
    else if (alvo.checked == false)
    {
        // console.log("desativou")
        document.getElementById(`container_horarios_dia${dia_semana}`).style.display = 'none'
    }
}

export {mudancaCheckDiaFuncionamento}