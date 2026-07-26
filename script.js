const weddingDate = new Date('October 24, 2026 19:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById('countdown').innerHTML = '<h3>¡Llegó nuestro gran día!</h3>';
    return;
  }

  document.getElementById('days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById('hours').textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById('minutes').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('seconds').textContent = Math.floor((distance % (1000 * 60)) / 1000);
}
setInterval(updateCountdown, 1000);
updateCountdown();

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo claro' : '🌙 Modo oscuro';
});

document.getElementById('rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('rsvp-message').textContent = `¡Gracias, ${name}! Tu asistencia ha sido registrada.`;
  event.target.reset();
});

const revealables = document.querySelectorAll('.revealable');
function reveal() {
  revealables.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) element.classList.add('active');
  });
}
window.addEventListener('scroll', reveal);
reveal();
