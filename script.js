// Función para encriptar el texto
function encriptarTexto(texto) {
    // Reemplazar letras por llaves de encriptación
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
  }
  
  // Función para desencriptar el texto
  function desencriptarTexto(texto) {
    // Reemplazar llaves de encriptación por letras
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
  }
  
  // Función para realizar la acción de encriptar o desencriptar
  function realizarAccion() {
    const texto = document.querySelector('[name="task"]').value.trim();
    const accion = document.querySelector('#accion').value;
    let resultado = '';
  
    if (accion === 'encriptar') {
      resultado = encriptarTexto(texto);
    } else if (accion === 'desencriptar') {
      resultado = desencriptarTexto(texto);
    }
  
    document.querySelector('#resultado').textContent = resultado;
  }
  
  // Agregar event listeners a los botones
  document.querySelector('#boton-accion').addEventListener('click', realizarAccion);
  document.querySelector('#boton-copiar').addEventListener('click', () => {
    const resultado = document.querySelector('#resultado');
    resultado.select();
    document.execCommand('copy');
  });
  