//* Recoge los datos del text area cuando se haya dado click en el boton de encriptar
function encriptarclick(){
    var datosusuario = document.getElementById('texto1').value;
    console.log(`Datos ingresados a encriptar: ${datosusuario}`);

    //! variables que cambiaran el texto original
    var firstletter_A = "ay";
    var firstletter_E = "enter";
    var firstletter_I = "imes";
    var firstletter_O = "ober";
    var firstletter_U = "ufat";

    //* recorre el arreglo recogido del text area y lo imprime en comsola
    for (let i = 0; i < datosusuario.length; i++) {
            // console.log('Datos obtenidos',datosusuario[i]);
            // Reemplazar todas las "a,e,i,o,u" por "ai ,enter,imes,ober,ufat" en el caracter actual
            //*  Utilice exprecion regular. 
            //* La g (global) en la expresión regular asegura
            //* que se reemplacen todas las "a,e,i,o,u" que se vallan encontrando en la cadena original
            var palabraencriptada = datosusuario[i]
            .replace(/a/g, firstletter_A)
            .replace(/e/g, firstletter_E)
            .replace(/i/g, firstletter_I)
            .replace(/o/g, firstletter_O)
            .replace(/u/g, firstletter_U);
            console.log('letra actual:', palabraencriptada);
    }
   
    //! Pasar la palabra encriptada al textArea 
    var mostrarEnTexto2 = palabraencriptada 
       var texto2 = document.getElementById("texto2");
             texto2.innerHTML = mostrarEnTexto2;
  console.log("RESULTADO ENCRIPTADO: ",mostrarEnTexto2 );

    //!   cambiar el h2 a texto encriptado
    var cambiarEstado = "Texto Encriptado";
    var nuevoEstado = document.getElementById('cambioEstado');
    nuevoEstado.innerHTML = cambiarEstado;

}

function actualizarPagina() {
    window.location.reload(); //* Recargar la página
  }
  