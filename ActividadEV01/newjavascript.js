function agregarExperiencia() {
  // Clonar el primer conjunto de campos de experiencia
  var clone = document
    .querySelector("#experienciaContainer div")
    .cloneNode(true)

  // Limpiar los valores de los campos clonados
  clone.querySelectorAll("input").forEach((input) => (input.value = ""))

  // Agregar el conjunto clonado al contenedor
  document.getElementById("experienciaContainer").appendChild(clone)
}

function agregarEstudios() {
  // Clonar el primer conjunto de campos académicos
  var clone = document.querySelector("#academicaContainer div").cloneNode(true)

  // Limpiar los valores de los campos clonados
  clone.querySelectorAll("input").forEach((input) => (input.value = ""))

  // Agregar el conjunto clonado al contenedor
  document.getElementById("academicaContainer").appendChild(clone)
}

function confirmarAccion() {
  var respuesta = confirm("¿Estás seguro de que deseas resetear el formulario?")
  if (respuesta == true) {
    // Utiliza el método location.reload() para recargar la página
    location.reload()
    alert("Formulario reseteado")
  } else {
    alert("Reset cancelado")
  }
}
