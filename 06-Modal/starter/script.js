'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
