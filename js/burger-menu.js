// Obtén una referencia a los botones
var btnMostrar = document.getElementById('btnMostrar');
var btnOcultar = document.getElementById('btnOcultar');

// Obtén una referencia al div para mostrar
var divParaMostrar = document.getElementById('divParaMostrar');

// Agrega un evento de clic al botón "Mostrar Modal"
btnMostrar.addEventListener('click', function() {
    // Cambia la propiedad 'display' del div para mostrar
    divParaMostrar.style.display = 'block';
    // Agrega la clase para bloquear el scroll
    document.body.classList.add('modal-open');
});

// Agrega un evento de clic al botón "Ocultar Modal"
btnOcultar.addEventListener('click', function() {
    // Cambia la propiedad 'display' del div para ocultar
    divParaMostrar.style.display = 'none';
    // Elimina la clase para habilitar el scroll
    document.body.classList.remove('modal-open');
});