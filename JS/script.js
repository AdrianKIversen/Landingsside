window.addEventListener('DOMContentLoaded', () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const hamburgerIcon = document.querySelector('.bmeny');
  
    hamburgerIcon.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  });