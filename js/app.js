document.querySelector('.header__btn').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
  });