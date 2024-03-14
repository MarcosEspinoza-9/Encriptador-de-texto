//* Recoge los datos del text area cuando se haya dado click en el boton de encriptar
function encriptarclick(){
    var datosusuario = document.getElementById('texto1').value;
    console.log(`Se dio click en el boton con los datos ${datosusuario}`);


    var firstletter_A = 'ai';
    var firstletter_A_Replace = ''

    var firstletter_E = 'enter';
    var firstletter_E_Replace = ''

    var firstletter_I = 'imes';
    var firstletter_I_Replace = ''

    var firstletter_O = 'ober';
    var firstletter_O_Replace = ''

    var firstletter_U = 'ufat';
    var firstletter_U_Replace = ''

   


    //* recorre el arreglo recogido del text area y lo imprime en comsola
    for (let i = 0; i < datosusuario.length; i++) {
        console.log('Datos obtenidos',datosusuario[i]);
        
        const firstletter_A_Replace = datosusuario.replace(datosusuario,firstletter_A)
        console.log('letra a Por =',firstletter_A_Replace);

    }
}

