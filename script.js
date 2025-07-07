// script.js
// Handles contact form submission feedback

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      status.textContent = 'Sending...';
      status.style.color = '#2e8cff';
      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (response.ok) {
          status.textContent = 'Thank you! Your message has been sent.';
          status.style.color = '#2effa3';
          form.reset();
        } else {
          status.textContent = 'Oops! There was a problem. Please try again.';
          status.style.color = '#ff2e88';
        }
      } catch (error) {
        status.textContent = 'Network error. Please try again later.';
        status.style.color = '#ff2e88';
      }
    });
  }
});
