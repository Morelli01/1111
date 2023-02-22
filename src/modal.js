(() => {
  const refs = {
    // Find all the buttons
    openModalButtons: document.querySelectorAll('[amenities-modal-open]'),
    closeModalButton: document.querySelector('[amenities-modal-close]'),
    modal: document.querySelector('[amenities-modal]'),
  };
  // Add event listener to all buttons
  refs.openModalButtons.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalButton.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();