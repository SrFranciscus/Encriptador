const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar() {
    const texto = textArea.value;

    console.log("Texto ingresado:", texto); // Depuración

    // Verificar si el textarea está vacío
    if (!texto.trim()) {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return;
    }

    // Verificar si el texto contiene mayúsculas o tildes
    const regexMayusculasTildes = /[A-ZÁÉÍÓÚáéíóú]/;
    if (regexMayusculasTildes.test(texto)) {
        alert("El texto contiene mayúsculas o tildes. Por favor, ingrese solo letras minúsculas y sin tildes.");
        return;
    }

    // Si pasa las validaciones, procede a encriptar el texto
    const textoEncriptado = encriptar(texto);

    console.log("Texto encriptado:", textoEncriptado); // Depuración

    resultado.value = textoEncriptado;
    textArea.value = "";

    // Ocultar la imagen de fondo y los elementos <p>
    resultado.style.backgroundImage = "none";
    document.querySelector('.texto1').style.display = 'none';
    document.querySelector('.texto2').style.display = 'none';
    document.querySelector('.imagendemuneco').style.display = 'none';

    // Mostrar el textarea de resultado
    resultado.style.display = 'block';

    // Mostrar el botón "Copiar" después de encriptar
    document.querySelector('.contenedor-boton-copiar').style.display = 'block';
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado;
}

function botonDesencriptar() {
    const texto = textArea.value;

    // Verificar si el textarea está vacío
    if (!texto.trim()) {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return;
    }

    const textoDesencriptado = desencriptar(texto);
    resultado.value = textoDesencriptado;
    textArea.value = "";

    // Ocultar la imagen de fondo y los elementos <p>
    resultado.style.backgroundImage = "none";
    document.querySelector('.texto1').style.display = 'none';
    document.querySelector('.texto2').style.display = 'none';
    document.querySelector('.imagendemuneco').style.display = 'none';

    // Mostrar el textarea de resultado
    resultado.style.display = 'block';

    // Mostrar el botón "Copiar" después de desencriptar
    document.querySelector('.contenedor-boton-copiar').style.display = 'block';
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado;
}

// Validar entrada para solo letras minúsculas y sin tildes
textArea.addEventListener('input', function () {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(textArea.value)) {
        textArea.value = textArea.value.slice(0, -1);
        alert("Solo minúsculas y sin tildes");
    }
});

// Función para copiar el texto al portapapeles
function copiarTexto() {
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}