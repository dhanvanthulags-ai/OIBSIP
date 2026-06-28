// ---------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------------------------
// Mobile menu toggle
// ---------------------------------------------------------------
const menuToggle = document.getElementById('menuToggle');
const topbarMenu = document.getElementById('topbarMenu');

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  topbarMenu.classList.remove('open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = topbarMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

topbarMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ---------------------------------------------------------------
// Active section highlighting (side dots + topbar)
// ---------------------------------------------------------------
const sections = document.querySelectorAll('main .section');
const navDots = document.querySelectorAll('.sidenav .dot');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      navDots.forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  rootMargin: '-45% 0px -45% 0px',
  threshold: 0
});

sections.forEach(section => observer.observe(section));