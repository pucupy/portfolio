Yapily.LoadingBar = {
  animateBar() {
    const elem = document.getElementById("loading-bar");
    let width = 1;
    const frame = () => {
      if (width >= 100) {
        clearInterval(id);
        this.animateBar();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
    var id = setInterval(frame, 10);
  },
  init() {
    document.querySelector('#show-progress').addEventListener('click', () => {
      this.animateBar();
    })
  }
}
