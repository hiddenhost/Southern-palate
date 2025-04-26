document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // If you have the overlay element in your HTML
      if (overlay) {
        overlay.classList.toggle('active');
      }
    });
    
    // Close menu when clicking on overlay
    if (overlay) {
      overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
      });
    }
  });