Yapily.onReady = () => {
  Yapily.Modal.init();
  Yapily.DropdownSearch.init();
}

window.addEventListener('DOMContentLoaded', () => {
  Yapily.onReady();
})
