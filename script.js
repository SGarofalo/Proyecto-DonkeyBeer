document.addEventListener("DOMContentLoaded", function() {
    // Al hacer clic en el botón "Sí", se muestra la página de Beer Page
    document.getElementById("si-button").addEventListener("click", function() {
      window.location.href = "inicio.html#beer-section";
    });
  
    // Al hacer clic en el botón "No", se muestra la página de Game Over
    document.getElementById("no-button").addEventListener("click", function() {
      document.getElementById("edad-verificacion").style.display = "none";
      document.getElementById("game-over-page").style.display = "block";
    });
  });
  