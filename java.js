// Slider with infinite carousel
let current = 0;
const slides = document.querySelectorAll('.slide');
let isAnimating = false;

function showSlide(n) {
  if (isAnimating) return;
  isAnimating = true;
  
  const activeSlide = slides[current];
  const activeImg = activeSlide.querySelector('img');
  
  // Animate only the image to slide out left
  activeImg.style.animation = 'slideOutLeft 0.7s ease forwards';
  
  // Update current
  current = (n + slides.length) % slides.length;
  
  const newSlide = slides[current];
  const newImg = newSlide.querySelector('img');
  
  // Show the new slide and animate image sliding in from right
  newSlide.classList.add('active');
  activeSlide.classList.remove('active');
  newImg.style.animation = 'slideInRight 0.7s ease forwards';
  
  setTimeout(() => {
    activeImg.style.animation = '';
    newImg.style.animation = '';
    isAnimating = false;
  }, 700);
}

function changeSlide(dir) {
  showSlide(current + dir);
}

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on nav link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  
  if (menu.classList.contains('open') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('open');
  }
});

// Newsletter subscribe
document.querySelector('.btn-subscribe').addEventListener('click', function() {
  const input = document.querySelector('.newsletter-form input');
  if (input.value.trim()) {
    alert('Thanks for subscribing! 🎉');
    input.value = '';
  } else {
    input.focus();
  }
});

// Wishlist heart toggle
document.querySelectorAll('.wish-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active');
    // Toggle between empty and filled heart
    if (this.classList.contains('active')) {
      this.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      this.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
});
