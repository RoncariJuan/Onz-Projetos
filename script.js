function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('fixed')) {
        event.target.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.fixed').forEach(modal => {
            modal.classList.add('hidden');
        });
        document.body.style.overflow = 'auto';
    }
});



//mobile
  // Menu Mobile
  const menuButton = document.getElementById('menuButton');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = mobileMenu.querySelector('div');
  const menuLinks = mobileMenu.querySelectorAll('a');

  function toggleMenu() {
      mobileMenu.classList.toggle('hidden');
      menuOverlay.classList.toggle('translate-x-full');
      document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
  }

  menuButton.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);

  // Fechar menu ao clicar em um link
  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (!mobileMenu.classList.contains('hidden')) {
              toggleMenu();
          }
      });
  });

  // Fechar menu ao clicar fora
  mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
          toggleMenu();
      }
  });

  // Fechar menu com tecla ESC
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          toggleMenu();
      }
  });