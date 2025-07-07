// Applique un effet d'apparition à tous les boutons de la page
window.addEventListener('DOMContentLoaded', function() {
  // Sélectionne tous les boutons et les input de type submit/button
  const buttons = document.querySelectorAll('button, input[type="submit"], input[type="button"]');
  buttons.forEach((btn, i) => {
    // Ajoute la classe d'animation avec un léger délai pour un effet en cascade
    setTimeout(() => {
      btn.classList.add('fade-in-btn');
    }, i * 120);
  });
});
