const formulario = document.getElementById('formulario');
const infoCaja = document.getElementById('info');
const contenido = document.getElementById('contenido');
const cerrar = document.getElementById('cerrar');

formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // evita que se recargue la página

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const edad = parseInt(document.getElementById('edad').value);

  // Validación
  if(nombre === '') {
    alert('El nombre no puede estar vacío');
    document.getElementById('nombre').focus();
    return;
  }

  if(apellido === '') {
    alert('El apellido no puede estar vacío');
    document.getElementById('apellido').focus();
    return;
  }

  if(isNaN(edad) || edad <= 0) {
    alert('La edad debe ser un número positivo mayor a 0');
    document.getElementById('edad').focus();
    return;
  }

  // Mostrar información
  contenido.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Edad:</strong> ${edad}</p>
  `;
  infoCaja.style.display = 'block';
});

// Botón de cerrar
cerrar.addEventListener('click', function() {
  infoCaja.style.display = 'none';
  formulario.reset();
  document.getElementById('nombre').focus();
});
