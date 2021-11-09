document.addEventListener('DOMContentLoaded', () => {
  const cartItemWrap = document.querySelector('.cart-items-wrap');
  const showBtn = document.querySelector('.cart-btn');
  const hideBtn = document.querySelector('.close-btn');

  if (showBtn) {
    showBtn.addEventListener('click', () => {
      cartItemWrap.classList.add('show');
    });
  }

  if (hideBtn) {
    hideBtn.addEventListener('click', () => {
      cartItemWrap.classList.remove('show');
    });
  }
});
