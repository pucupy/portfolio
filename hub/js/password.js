Yapily.Password = {
  init() {
    document.querySelectorAll('input[type="checkbox"][data-target]').forEach((input) => {
      input.addEventListener('click', (e) => {
        const targetSelector = e.target.dataset.target;

        const targetElement = document.querySelector(targetSelector);

        targetElement.type = (targetElement.type === 'password') ? 'text' : 'password';
      })
    })
  }
}