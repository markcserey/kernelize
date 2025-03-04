// Ensure DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    console.log('Hamburger menu and nav found, adding click listener...');
    menuToggle.addEventListener('click', () => {
      console.log('Hamburger menu clicked, toggling classes...');
      console.log('Nav classList before toggle:', nav.classList);
      nav.classList.toggle('active');
      console.log('Nav classList after toggle:', nav.classList);
      menuToggle.classList.toggle('active');
      console.log('Menu-toggle classList after toggle:', menuToggle.classList);
    });

    // Close menu when clicking outside (optional for better UX)
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        console.log('Clicked outside, closing menu');
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  } else {
    console.error('Hamburger menu or nav not found in the DOM. Check HTML structure.');
    if (!menuToggle) console.error('.menu-toggle not found');
    if (!nav) console.error('.nav not found');
  }

  // Copy Button Functionality
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const codeElement = button.closest('.code-snippet').querySelector('code');
      if (codeElement) {
        const code = codeElement.innerText;
        navigator.clipboard.writeText(code).catch(err => {
          console.error('Failed to copy code:', err);
        });
      } else {
        console.error('Code element not found for copy button');
      }
    });
  });
});