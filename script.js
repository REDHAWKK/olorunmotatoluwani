  feather.replace();
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });