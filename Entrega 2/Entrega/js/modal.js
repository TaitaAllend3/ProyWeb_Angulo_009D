function showModal() {
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName('close')[0];
  modal.style.display = 'block';
  span.onclick = function() {
      modal.style.display = 'none';
  };
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
}

function limpiarTexto() {
  document.getElementById("message").value = "";
}

function enviar() {
  // Limpiar mensajes de validación anteriores
  limpiarMensajes();

  var nombre = document.getElementsByName("name")[0].value.trim();
  var correo = document.getElementsByName("email")[0].value.trim();
  var telefono = document.getElementsByName("phone")[0].value.trim();

  if (nombre === "" || correo === "" || telefono === "") {
      mostrarMensaje("Por favor, completa todos los campos de información del cliente.", "error");
      return;
  }

  var radioDespacho = document.getElementById("delivery-option-despacho");
  var radioDomicilio = document.getElementById("delivery-option-domicilio");
  var direccion = document.getElementsByName("address")[0].value.trim();
  var comuna = document.getElementsByName("city")[0].value.trim();
  var horaDespacho = document.getElementsByName("delivery-time")[0].value.trim();

  if ((!radioDespacho.checked && !radioDomicilio.checked) || direccion === "" || comuna === "") {
      mostrarMensaje("Por favor, completa todos los campos de información de entrega.", "error");
      return;
  }
}

function limpiarMensajes() {
  var validationMessages = document.getElementById("validation-messages");
  // Eliminar todos los mensajes de validación anteriores
  while (validationMessages.firstChild) {
      validationMessages.removeChild(validationMessages.firstChild);
  }
}

function mostrarMensaje(mensaje, tipo) {
  var validationMessages = document.getElementById("validation-messages");
  var mensajeElement = document.createElement("div");
  mensajeElement.textContent = mensaje;
  mensajeElement.classList.add(tipo);
  validationMessages.appendChild(mensajeElement);
}



