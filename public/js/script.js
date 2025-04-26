// Iniciar Typed.js
var typed = new Typed(".typings", {
  strings: ["con código."],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Función para mostrar y ocultar secciones
function showSection(id) {
  const allSections = document.querySelectorAll('.section');
  allSections.forEach(sec => sec.classList.remove('active'));

  if (id === 'inicio') {
    allSections.forEach(sec => sec.classList.remove('active')); // Oculta todo
  } else {
    document.getElementById(id).classList.add('active'); // Muestra la elegida
  }
}

// Mostrar y ocultar botón de scroll al principio de la página
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Función para mostrar notificaciones
function showNotification(message) {
  const notif = document.getElementById('notification');
  notif.textContent = message;
  notif.classList.remove('hidden');
  notif.classList.add('show');

  // Oculta después de 3 segundos
  setTimeout(() => {
    notif.classList.remove('show');
    notif.classList.add('hidden');
  }, 3000);
}

// Función para dar like a un proyecto
function darLike(id, btn) {
  // Verifica si el dispositivo ya ha dado like usando una cookie
  if (getCookie('liked_project_' + id)) {
    showNotification('Ya has dado like a este proyecto.');
    return;
  }
  // Si no se ha dado like, procede a actualizar el contador de likes
  fetch(`/like/${id}`, {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Incrementa el contador de likes en la interfaz
      const likeCount = btn.querySelector('.like-count');
      likeCount.textContent = data.likes;

      // Establecer una cookie para recordar que este dispositivo ya dio like
      setCookie('liked_project_' + id, 'true', 30); // Expira en 30 días
    } else {
      alert('Hubo un problema al dar like.');
    }
  })
  .catch(error => {
    console.error('Error al dar like:', error);
    alert('Hubo un error al dar like.');
  });
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Esperar que todo el HTML esté cargado
document.addEventListener("DOMContentLoaded", function () {

  // Obtener el formulario de login
  const loginForm = document.getElementById("loginForm");

  // Agregar el event listener al formulario para el submit
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir comportamiento por defecto del formulario

    // Obtener las credenciales ingresadas por el usuario
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Verificar si las credenciales son correctas
    if (username === "admin" && password === "2025") {
      // Si el login es correcto, ocultar la sección de login
      document.getElementById("login").style.display = "none";
      // Mostrar la sección de admin
      document.getElementById("admin").style.display = "block";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});



