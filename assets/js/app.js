var boton = document.getElementById('principal-button');
boton.addEventListener("click", function(){
  //crear el input y darle atributos
  var input = document.createElement('input');
  input.setAttribute("type","text"); //dandole atributo al input
  input.setAttribute("placeholder","Escribe algo"); //
  input.classList.add("class","input_titulo");

  //crear boton y dar atributos al boton
  var new_button = document.createElement('button');
  var text_button = document.createTextNode('Guardar');//creando un nodo de texto
  new_button.setAttribute("type","button");//dandole atributos
  new_button.classList.add("class", "boton_guardar");

  list.appendChild(input); //agregando el input al div de tareas
  new_button.appendChild(text_button); //agregando el texto al nuevo boton
  list.appendChild(new_button); //agregando el nuevo boton a mi div de tareas
})
