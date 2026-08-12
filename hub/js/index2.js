Yapily.onReady = () => {
  Yapily.Modal.init();
  Yapily.Tabs.init();
}

window.addEventListener('DOMContentLoaded', () => {
  Yapily.onReady();
})
