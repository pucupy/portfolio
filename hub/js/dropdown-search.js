Yapily.DropdownSearch = {
  registerButton() {
      document.querySelector('#dropdown-search-btn').addEventListener('click', () => {
        document.querySelector("#dropdown-countries").classList.toggle("show");
      })
  },

  registerFilter() {
    document.querySelector('#input-search').addEventListener('keyup', (e) => {
      var filter, ul, li, a, i;
      const div = document.getElementById("dropdown-countries");
      filter = e.target.value.toUpperCase();
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        const txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    })
  },

  init() {
    this.registerButton();
    this.registerFilter();
  }
}
