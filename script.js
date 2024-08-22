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

const matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
]

function botonEncriptar() {
  const texto = encriptar(campoTexto.value)
  campoMensaje.value = texto
}

function encriptar(fraseAEncriptar) {
  if (/^[a-z\s]+$/.test(fraseAEncriptar)) {
    for (let i = 0; i < matriz.length; i++) {
      if (fraseAEncriptar.includes(matriz[i][0])) {
        fraseAEncriptar = fraseAEncriptar.replaceAll(matriz[i][0], matriz[i][1])
      }
    }
    campoTexto.value = ""

    campoMensaje.style.display = "block"
    imagenSalida.style.display = "none"
    areaCopia.style.display = "block"
    mensaje.style.display = "none"
    return fraseAEncriptar
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
    for (var i = 0; i < matriz.length; i++) {
      if (fraseADesencriptar.includes(matriz[i][1])) {
        fraseADesencriptar = fraseADesencriptar.replaceAll(
          matriz[i][1],
          matriz[i][0]
        )
      }
    }
    campoTexto.value = ""

    campoMensaje.style.display = "block"
    imagenSalida.style.display = "none"
    areaCopia.style.display = "block"
    mensaje.style.display = "none"
    return fraseADesencriptar
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
