
(function(){
  const modeBtn = document.getElementById('modeBtn');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Dark mode toggle (stores preference)
  function setTheme(mode) {
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', mode);
  }
  const stored = localStorage.getItem('theme');
  if (stored) setTheme(stored);
  modeBtn && modeBtn.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Mobile nav
  navToggle && navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
