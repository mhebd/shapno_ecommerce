const cartListToggler = () => {
  const cartItemWrap = document.querySelector('.cart-items-wrap');
  const showBtn = document.querySelector('.cart-btn');
  const hideBtn = document.querySelector('.close-btn');

  showBtn.addEventListener('click', () => {
    cartItemWrap.classList.add('show');
  });

  hideBtn.addEventListener('click', () => {
    cartItemWrap.classList.remove('show');
  });
};

export default cartListToggler;
