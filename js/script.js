
 // Image zoom effect
const images = document.querySelectorAll('.zoom-img');
const overlay = document.getElementById('overlay');

images.forEach(img => {
  img.addEventListener('click', () => {
    if (img.classList.contains('expanded')) {
      img.classList.remove('expanded');
      overlay.classList.remove('active');
    } else {
      images.forEach(i => i.classList.remove('expanded'));
      img.classList.add('expanded');
      overlay.classList.add('active');
    }
  });
});

overlay.addEventListener('click', () => {
  document.querySelectorAll('.zoom-img.expanded').forEach(img => {
    img.classList.remove('expanded');
  });

  overlay.classList.remove('active');
});

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
