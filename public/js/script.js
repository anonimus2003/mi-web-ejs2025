// Inicializar el carrusel con Splide.js
var splide = new Splide('.splide', {
    type    : 'fade',      // Efecto de desvanecimiento entre imágenes
    heightRatio: 0.5,      // Controla la altura del carrusel
    autoplay: true,        // Hace que el carrusel avance automáticamente
    arrows : false,        // Desactiva las flechas de navegación
    pagination : true,     // Activa los puntos de paginación
    interval: 5000,        // Intervalo de tiempo entre cambios de imagen (5 segundos)
});

splide.mount();  // Inicia el carrusel





  function compartirEnlace() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => alert("¡Enlace copiado al portapapeles!"))
      .catch(() => alert("Error al copiar el enlace."));
  }




  function darLike(boton) {
    const icon = boton.querySelector("i");
    const contador = boton.querySelector(".like-count");
  
    let likes = parseInt(contador.textContent);
  
    // Verifica si ya está activo el like
    const yaLeGusto = boton.classList.contains("liked");
  
    if (yaLeGusto) {
      likes--;
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
      boton.classList.remove("liked");
    } else {
      likes++;
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
      boton.classList.add("liked");
    }
  
    contador.textContent = likes;
  }
  




  function compartirEnlaceProyecto(urlProyecto) {
    if (navigator.share) {
      navigator.share({
        title: 'Mira este proyecto',
        text: 'Te comparto este proyecto genial:',
        url: urlProyecto
      })
      .then(() => console.log('¡Compartido con éxito!'))
      .catch((error) => console.error('Error al compartir:', error));
    } else {
      alert('Tu navegador no soporta el menú de compartir automático. Copiamos el enlace por ti.');
      navigator.clipboard.writeText(urlProyecto)
        .then(() => alert('¡Enlace copiado al portapapeles!'))
        .catch(err => alert('Error al copiar el enlace.'));
    }
  }
  










    //  Animación de escritura (Typing)
    // ---------------------------
    new Typed(".typings", {
      strings: ["con código!"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });




// Obtener el input de búsqueda y las secciones de la página
const searchInput = document.querySelector('.search-input');
const sections = document.querySelectorAll('.section'); // Asegúrate de que las secciones que deseas buscar tengan la clase 'section'

// Agregar un evento de búsqueda
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas

    // Recorrer todas las secciones de la página
    let found = false; // Variable para saber si se ha encontrado alguna coincidencia
    sections.forEach(section => {
        const sectionTitle = section.querySelector('h2') ? section.querySelector('h2').textContent.toLowerCase() : ''; // Obtener el título de cada sección (suponiendo que tiene un h2)
        const sectionText = section.textContent.toLowerCase(); // Todo el texto de la sección

        if (sectionTitle.includes(searchTerm) || sectionText.includes(searchTerm)) {
            // Si el término de búsqueda está en el título o en el contenido de la sección, mostrarla
            section.style.display = 'block'; // Mostrar la sección
            if (!found) {
                section.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll hacia el primer elemento encontrado
                found = true;
            }
        } else {
            // Si no coincide, ocultar la sección
            section.style.display = 'none';
        }
    });
});




  // Simulación de un login básico
// Manejador de eventos para el formulario de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto del formulario

  // Obtener los valores del formulario
  const username = event.target.username.value;
  const password = event.target.password.value;

  // Verificación simple de credenciales
  if (username === "admin" && password === "2025") {
    // Si las credenciales son correctas, ocultamos el login y mostramos el panel de admin
    document.getElementById("login").style.display = "none";
    document.getElementById("admin").style.display = "block";
  } else {
    // Si las credenciales no son correctas, mostramos un mensaje de error
    alert("Usuario o contraseña incorrectos.");
  }
});

