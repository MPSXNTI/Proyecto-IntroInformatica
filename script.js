function mostrarSeccion(seccion) {
  // Ocultar todas las secciones
  var secciones = document.getElementsByTagName("section");
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }
  // Mostrar la sección seleccionada
  document.getElementById(seccion).style.display = "block";
  // Marcar el enlace correspondiente como activo
  var enlaces = document.getElementsByTagName("a");
  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].classList.remove("active");
  }
  document.getElementById(seccion + "-enlace").classList.add("active");
}

// Mostrar la primera sección al cargar la página
mostrarSeccion('seccion1');


function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateTime, 1000);

const queryForm = document.getElementById('query-form');
const queryResponse = document.getElementById('query-response');

queryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Aquí es donde enviaríamos la consulta a un servidor y esperaríamos una respuesta

  // En este ejemplo, simplemente mostramos la información ingresada por el usuario
  queryResponse.innerHTML = `
    <p>Gracias por contactarnos, ${name}. Hemos recibido tu consulta:</p>
    <ul>
      <li><strong>Correo electrónico:</strong> ${email}</li>
      <li><strong>Mensaje:</strong> ${message}</li>
    </ul>
  `;
  queryForm.reset();
});