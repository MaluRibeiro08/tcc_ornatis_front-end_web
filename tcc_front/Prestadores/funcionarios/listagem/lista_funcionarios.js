//abrir menu lateral

function abrir_menu(){
    document.getElementById('menu').style.width = '500px';
}

function fechar_menu(){
    document.getElementById('menu').style.width = '0px'
}

//modal editar

function abrirEditar(){
    document.getElementById('popup_editar').style.display = "block"
}

function fecharEditar(){
    document.getElementById('popup_editar').style.display = "none"
}

//modal excluir

function abrirExcluir(){
    document.getElementById('popup_excluir').style.display = "block"
}

function fecharExcluir(){
    document.getElementById('popup_excluir').style.display = "none"
}

//fazer aparecer a imagem quando fizer upload (MODAL EDITAR)

let photo_funcionario = document.getElementById('img_photo_funcionario');
let file = document.getElementById('fl_image_funcionario');

photo_funcionario.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', (event) => {
    let reader = new FileReader();

    reader.onload = () => {
        photo_funcionario.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

/*****CONSUMO DE API******/

/***fetch***/

const id_empresa = 1;

const carregarFuncionarios =   (id_empresa) => fetch(`http://10.107.144.26/tcc_ornatis_back-end/api-ornatis/rotas/adm/funcionario/?id_empresa=${id_empresa}&acao=listarFuncionarios`)

const teste = async () =>
{
    const response = await carregarFuncionarios(id_empresa);
    // console.log(response)
    const informacoes = await response.json();
    console.log(informacoes);
}
teste();

console.log("oi")

console.log("tchau")


//


// const novo_funcionario = document.createElement("div") 

// novo_funcionario.id = `container_borda_funcionario${novoFuncionario}`


// novo_funcionario.innerHTML = 
//             `
//             <div id="borda">
//             <div class="foto"></div> 
//             <div id="dados_fun">
//                 <div id="nome"><a href="../detalhes/detalhes_funcionario.html"><h4>Arielly Angelo</h4></a></div> 
//                 <div id="editar_excluir">
//                     <a href="javascript: abrirEditar();"><span id="edit" class="material-icons-outlined">edit </span></a>
//                       <section class="fundo_popup">
//                           <div id="popup_editar">
//                           <a href="javascript: fecharEditar();" class="aaa"> Editar funcionário<span id="close" class="material-icons-outlined">close </span></a>
//                           <div id="modal"> 
         
//                               <div id="informacoes">
//                                   <div id="campo">
//                                       <label>Nome</label>
//                                       <input id="nome_funcionario" class="input_linha" type="text">
//                                   </div>
//                                   <div id="campo">
//                                       <label>Email</label> 
//                                       <input id="email_funcionario" class="input_linha" type="text" name="search" placeholder=""/>
//                                   </div>
//                                   <div id="campo">
//                                       <label>Senha</label> 
//                                       <input id="senha_funcionario" class="input_linha" type="text" name="search" placeholder=""/>
//                                   </div>
//                                   <div class="max_width_funcionario">
//                                       <div class="image_container">
//                                           <img src="../../img/add-photo-icon-isolated-white-background-camera-plus-new-vector-stock-173611946.jpeg" id="img_photo_funcionario">
//                                       </div>
//                                        <input type="file" id="fl_image_funcionario" name="fl_image_funcionario" accept="image/*">          
//                                   </div>
//                               </div>  
//                               <div id="horario">
//                                   <div id="campo">
//                                      <label>Horário de trabalho:</label> 
                                     
//                                      <!-- <a href="#" onmouseover="abrir()">Passar mouse</a> -->
//                                      <div id="container_funcionamento_scroll">
//                                          <div id="container_geral_domingo" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_1" class="input" type="checkbox" name="check_dia_semana_1">
//                                              <label class= "lable_input" for="input_dia_semana_1">Domingo</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_1" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_1" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_1" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_1" type="text" placeholder="término">
//                                              </div> 
//                                          </div>
//                                      </div>
//                                      <div id="container_geral_segunda-feira" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_2" class="input" type="checkbox" name="check_dia_semana_2">
//                                              <label class= "lable_input" for="input_dia_semana_2">Segunda-feira</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_2" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_2" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_2" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_2" type="text" placeholder="término">
//                                              </div>
//                                          </div>
//                                      </div>
//                                      <div id="container_geral_terca-feira" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_3" class="input" type="checkbox" name="check_dia_semana_3">
//                                              <label class= "lable_input" for="input_dia_semana_3">Terça-feira</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_3" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_3" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_3" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_3" type="text" placeholder="término">
//                                              </div>
//                                          </div>
//                                      </div>
//                                      <div id="container_geral_quarta-feira" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_4" class="input" type="checkbox" name="check_dia_semana_4">
//                                              <label class= "lable_input" for="input_dia_semana_4">Quarta-feira</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_4" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_4" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_4" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_4" type="text" placeholder="término">
//                                              </div>
//                                          </div>
//                                      </div>
//                                      <div id="container_geral_quinta-feira" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_5" class="input" type="checkbox" name="check_dia_semana_5">
//                                              <label class= "lable_input" for="input_dia_semana_5">Quinta-feira</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_5" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_5" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_5" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_5" type="text" placeholder="término">
//                                              </div>
//                                          </div>
//                                      </div>
//                                      <div id="container_geral_sexta-feira" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_6" class="input" type="checkbox" name="check_dia_semana_6">
//                                              <label class= "lable_input" for="input_dia_semana_6">Sexta-feira</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_6" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_6" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_6" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_6" type="text" placeholder="término">
//                                              </div>
//                                          </div>
//                                      </div>
//                                      <div id="container_geral_sabado" class="container_geral_dia_funcionamento" >
//                                          <div class="container_item_check">
//                                              <input id="input_dia_semana_7" class="input" type="checkbox" name="check_dia_semana_7">
//                                              <label class= "lable_input" for="input_dia_semana_7">Sábado</label>      
//                                          </div>
//                                          <div class="container_geral_horarios_funcionamento">
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="1input_hora_inicio_7" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="1input_hora_termino_7" type="text" placeholder="término">
//                                              </div>
//                                              <div class="container_horario_funcionamento">
//                                                  <input class="input_hora_funcionamento" id="2input_hora_inicio_7" type="text" placeholder="início">
//                                                  <p>até</p>
//                                                  <input class="input_hora_funcionamento" id="2input_hora_termino_7" type="text" placeholder="término">
//                                              </div>
//                                          </div>
//                                      </div>
//                                      </div>
                                     
//                                  </div>  
//                                  <button id="btn_salvar_funcionario">
//                                     <h2>Salvar</h2>
//                                  </button>
//                              </div>
//                               </div>
//                           </div>
//                       </section>
                      
//                       <a href="javascript: abrirExcluir();"><span id="delete" class="material-icons-outlined">delete </span></a>
//                       <div id="popup_excluir">
//                           <a href="javascript: fecharExcluir();" class="aaa">Excluir funcionário<span id="closeExcluir" class="material-icons-outlined">close </span></a>
//                           <h2>Deseja excluir esse funcionário?</h2>
//                           <div id="butons_excluir">
//                               <button id="buttonExcluir">Sim</button>
//                               <button id="buttonExcluir">Não</button>
//                           </div>
//                       </div>
//                   </div>
//             </div>
//         </div>
//             `
        




