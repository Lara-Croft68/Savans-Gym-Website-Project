
  const openButtons = document.querySelectorAll('.open-btn');
  const popupForm = document.getElementById('signup-form');
  const closeBtn = document.getElementById('close-btn');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      popupForm.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
  });

  // Optional: Close popup if user clicks outside the form
  window.addEventListener('click', (e) => {
    if (e.target === popupForm) {
      popupForm.style.display = 'none';
    }
  });






