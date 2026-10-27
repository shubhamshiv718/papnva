const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navActions = document.getElementById('navActions');
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.textContent = open ? '×' : '☰';
      navLinks.classList.toggle('open', open);
      navActions.classList.toggle('open', open);
    });
    document.querySelectorAll('#navLinks a').forEach(link => link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      navLinks.classList.remove('open');
      navActions.classList.remove('open');
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
