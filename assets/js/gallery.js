const triggers = Array.from(document.querySelectorAll('.gallery-trigger'));
const images = triggers.map((trigger) => trigger.querySelector('img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

let currentIndex = 0;
let lastFocusedElement = null;

function updateLightboxImage() {
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

function openLightbox(index) {
  currentIndex = index;
  lastFocusedElement = document.activeElement;
  updateLightboxImage();
  lightbox.hidden = false;
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  closeBtn.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImg.src = '';
  lightboxImg.alt = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightboxImage();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

triggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (lightbox.hidden) return;
  if (event.key === 'ArrowRight') showNext();
  if (event.key === 'ArrowLeft') showPrev();
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'Tab') {
    const controls = [closeBtn, prevBtn, nextBtn];
    const currentPosition = controls.indexOf(document.activeElement);
    const direction = event.shiftKey ? -1 : 1;
    const nextPosition = (currentPosition + direction + controls.length) % controls.length;
    event.preventDefault();
    controls[nextPosition].focus();
  }
});
