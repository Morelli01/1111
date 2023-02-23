function bindModalClickAction(containerClassName) {
    // Check if container element exists
    if (!!document.querySelector("." + containerClassName)) {
        const refs = {
            openModalBtn: eval("document.querySelector('." + containerClassName + " [data-modal-open]')"),
            closeModalBtn: eval("document.querySelector('." + containerClassName + " [data-modal-close]')"),
            modal: eval("document.querySelector('." + containerClassName + " [data-modal]')")
        };
        if (!!refs.openModalBtn) {
            refs.openModalBtn.addEventListener("click", toggleModal);
        } else {
            console.warn('No openModalBtn found!');
        }
        if (!!refs.closeModalBtn) {
            refs.closeModalBtn.addEventListener("click", toggleModal);
        } else {
            console.warn('No closeModalBtn found!');
        }
        if (!(!!refs.modal)) {
            console.warn('No modal found!');
        }

        function toggleModal() {
            refs.modal.classList.toggle("is-hidden");
        }
    } else {
        console.warn('No container found!');
    }
}