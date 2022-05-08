"use strict"

const fecharModal = (modal) =>
{
    document.getElementById(`modal_${modal}`).style.display = 'none';
    document.getElementById("container_modais").style.display = "none";
}

// EVENTOSSS
    document.getElementById("fechar_modal_edicao").addEventListener("click", () =>
    {
        fecharModal("edicao")
    })