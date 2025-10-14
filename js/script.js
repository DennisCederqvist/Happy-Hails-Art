(function () {
  const btn = document.getElementById('menuButton');
  const links = document.getElementById('navLinks');
  const backdrop = document.getElementById('backdrop');

  function openMenu() {
    links.classList.add('open');
    links.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll', 'menu-open');
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add('show'));
    btn.setAttribute('aria-expanded', 'true');
    const firstLink = links.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    links.classList.remove('open');
    links.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll', 'menu-open');
    backdrop.classList.remove('show');
    setTimeout(() => { backdrop.hidden = true; }, 200);
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  btn.addEventListener('click', () =>
    links.classList.contains('open') ? closeMenu() : openMenu()
  );
  backdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) closeMenu();
  });
  links.addEventListener('click', (e) => {
    if (e.target.closest('a')) closeMenu();
  });
})();

document.getElementById("year").textContent = new Date().getFullYear();