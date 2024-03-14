//* Recoge los datos del text area cuando se haya dado click en el boton de encriptar
function encriptarclick(){
    var datosusuario = document.getElementById('texto1').value;
    console.log(`Datos ingresados in incriptar: ${datosusuario}`);


    var firstletter_A = "ai";
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
            //* que se reemplacen todas las "a,e,i,o,u" que se vallan encontrando
            const palabraencriptada = datosusuario[i]
            .replace(/a/g, firstletter_A)
            .replace(/e/g, firstletter_E)
            .replace(/i/g, firstletter_I)
            .replace(/o/g, firstletter_O)
            .replace(/u/g, firstletter_U);
            console.log('letra actual:', palabraencriptada);
       
    }


}


function actualizarPagina() {
    // Código para actualizar el contenido de la página
    window.location.reload(); // Recargar la página
  }
  