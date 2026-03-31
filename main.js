// Scroll fade for hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  hero.style.opacity = 1 - window.scrollY / 500;
});

// Animate skill bars when visible
const skills = document.querySelectorAll('.skill .bar div');
window.addEventListener('scroll', () => {
  skills.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      bar.style.width = bar.style.width || bar.getAttribute('style');
    }
  });
});

// Dark/Light toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});