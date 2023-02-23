(() => {
  const refs = {
    // Find all the buttons
    openModalButtons: document.querySelectorAll('[amenities-data-modal-open]'),
    closeModalButton: document.querySelector('[amenities-data-modal-close]'),
    modal: document.querySelector('[amenities-data-modal]')
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