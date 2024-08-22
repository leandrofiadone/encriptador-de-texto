const campoTexto = document.getElementById("campoTexto")
const campoMensaje = document.getElementById("campoMensaje")
const imagenSalida = document.getElementById("imagenSalida")
const areaCopia = document.getElementById("botonCopiar")
const mensaje = document.getElementById("mensajes")
const listado = [
  "-Solo se aceptan minusculas",
  "-No se aceptan mayusculas",
  "-No se aceptan acentos",
  "-No se aceptan simbologia",
  "-No se acepta letra Ñ"
]
const advertencia = listado.join("\n\n")

// Clave de cifrado para el cifrado César
const claveCifrado = 3

// Cifrar texto usando cifrado César
function cifrarTexto(texto, clave) {
  return texto
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        let codigo =
          ((char.charCodeAt(0) - "a".charCodeAt(0) + clave) % 26) +
          "a".charCodeAt(0)
        return String.fromCharCode(codigo)
      }
      return char
    })
    .join("")
}

// Descifrar texto usando cifrado César
function descifrarTexto(texto, clave) {
  return texto
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        let codigo =
          ((char.charCodeAt(0) - "a".charCodeAt(0) - clave + 26) % 26) +
          "a".charCodeAt(0)
        return String.fromCharCode(codigo)
      }
      return char
    })
    .join("")
}

function botonEncriptar() {
  const texto = encriptar(campoTexto.value)
  campoMensaje.value = texto
}

function encriptar(fraseAEncriptar) {
  if (/^[a-z\s]+$/.test(fraseAEncriptar)) {
    const textoCifrado = cifrarTexto(fraseAEncriptar, claveCifrado)
    campoTexto.value = ""
    campoMensaje.style.display = "block"
    imagenSalida.style.display = "none"
    areaCopia.style.display = "block"
    mensaje.style.display = "none"
    return textoCifrado
  } else {
    limpiarCampos()
    alert(advertencia)
    return ""
  }
}

function botonDesencriptar() {
  const texto = desencriptar(campoTexto.value)
  campoMensaje.value = texto
}

function desencriptar(fraseADesencriptar) {
  if (/^[a-z\s]+$/.test(fraseADesencriptar)) {
    const textoDescifrado = descifrarTexto(fraseADesencriptar, claveCifrado)
    campoTexto.value = ""
    campoMensaje.style.display = "block"
    imagenSalida.style.display = "none"
    areaCopia.style.display = "block"
    mensaje.style.display = "none"
    return textoDescifrado
  } else {
    limpiarCampos()
    alert(advertencia)
    return ""
  }
}

function limpiarCampos() {
  document.getElementById("campoTexto").value = ""
  document.getElementById("campoMensaje").value = ""
}

function botonCopiar() {
  navigator.clipboard.writeText(campoMensaje.value)
}

function borrarTexto() {
  document.getElementById("campoTexto").value = ""
  document.getElementById("campoMensaje").value = ""
  document.getElementById("mensajes").textContent = ""
}
