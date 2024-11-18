const botonDespegable = document.querySelector('.boton-despegable');
const navLinks = document.querySelector('.nav-links');
const mainContent = document.querySelector('.main-content');

// Alternar la visibilidad del menú y desplazar el contenido hacia abajo
botonDespegable.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});


