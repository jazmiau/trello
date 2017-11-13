function trello(){
  var container = document.getElementById('container')
  var btn = document.createElement('button');
  var input = document.createElement('input');
  var textNode = document.createTextNode('Guardar');

  //atributos (convierte el input en un valor id)(el 'valor'es el nombre que se le da al id)
  input.setAttribute('id', 'valor');

  btn.appendChild(textNode); //agregando el nodo de texto al botón
  container.appendChild(btn); //agregando el btn al container
  container.appendChild(input); //agregando el input al container

  //guardar el texto escrito en el div
  btn.addEventListener('click', function(){ //al hacer click el texto se guarde
    var textValue = document.getElementById('valor').value; //rescatando el valor del input
    document.getElementById('valor').value = ""; //limpiando el input despues de escribir comentario
    var list = document.getElementById('list'); //llamar al div que va a contener el js
    var parrafo = document.createElement('p'); //creando el elemento de parrafo
    var textoNuevo = document.createTextNode(textValue); //nodo de texto en el texto nuevo
    var add = document.createElement('a'); //añadir un a al comentario
    add.setAttribute('href', '#'); //añadiendo el href a ese add creado para que se pueda dar click
    var textAdd = document.createTextNode("añadir tarjeta"); //que en eses add salga un añadir texto

    add.addEventListener('click', function(){
      var txtArea = document.createElement('textarea');
      var add1 = document.createElement('a'); //añadir un a al comentario
      add1.setAttribute('href', '#'); //añadiendo el href a ese add creado para que se pueda dar click
      var textAdd1 = document.createTextNode("añadir tarjeta"); //que en eses add salga un añadir texto
      //probando agregar boton
      var parrafotarjeta = document.createElement('p');
      var parrafotexto = document.createTextNode(parrafotexto);
      var nuevoboton = document.createElement('button');
      var nodoboton = document.createTextNode('guardar');


      parrafotarjeta.appendChild(parrafotexto);
      nuevoboton.appendChild(parrafotarjeta);

      list.appendChild(txtArea);
      add1.appendChild(textAdd1);
      list.appendChild(add1);
      nuevoboton.appendChild(nodoboton);
      list.appendChild(nuevoboton);
    })



    parrafo.appendChild(textoNuevo); //agregando texto nuevo a parrafo
    list.appendChild(parrafo); //agregando el parrafo al div contenedor
    add.appendChild(textAdd);
    list.appendChild(add);
  })
}
