Yapily.Modal = {
  getModal() {
    return document.querySelector("#modal");
  },
  showModal() {
    this.getModal().style.display = 'block';
  },
  hideModal() {
    this.getModal().style.display = 'none';
  },
  init() {
    const modalBtn = document.querySelector('#btn');
    const modalCloseBtn = document.querySelector('#modal .close');
    const modalContent = document.querySelector('.modal-content');

    modalBtn.addEventListener('click', () => {
      this.showModal();
    })

    modalCloseBtn.addEventListener('click', () => {
      this.hideModal();
    });

    document.addEventListener('click', (e) => {
      const modal = this.getModal();

      if(!modalContent.contains(e.target) && e.target !== modalBtn) {
        this.hideModal();
      }
    });
  }
}