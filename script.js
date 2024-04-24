function encriptar(){
    var texto = document.getElementById("textoEntrada").value.toLowerCase();

    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    
    document.getElementById("textoSalida").innerHTML = textoEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("textoEntrada").value.toLowerCase();

    var textoDesencriptado = texto.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
    
    document.getElementById("textoSalida").innerHTML = textoDesencriptado;
}

function copiar(){
    var texto = document.getElementById("textoSalida");
    texto.removeAttribute('disabled');
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    document.execCommand("copy");
    texto.setAttribute('disabled', 'disabled');
}