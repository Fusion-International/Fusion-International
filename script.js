// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Modal elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = modal.querySelector('.modal-close');

// Product card click handler
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3')?.textContent || 'Product Details';
    const description = card.querySelector('p')?.textContent || 'No description available.';
    const img = card.querySelector('img');
    const imgSrc = img?.src || '';
    const imgAlt = img?.alt || '';

    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <img src="${imgSrc}" alt="${imgAlt}" style="max-width:100%; height:auto; margin-bottom:10px;">
      <p>${description}</p>
    `;
    modal.removeAttribute('hidden');
  });
});

// Close modal on close button
modalClose.addEventListener('click', () => {
  modal.setAttribute('hidden', true);
});

// Close modal when clicking outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.setAttribute('hidden', true);
  }
});

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = newsletterForm?.querySelector('input[type="email"]');

if (newsletterForm && newsletterEmail) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();

    if (validateEmail(email)) {
      alert(`Thank you for subscribing with ${email}!`);
      newsletterEmail.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
