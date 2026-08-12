Yapily.Tabs = {
  init() {
    const tabLinks = document.querySelectorAll('.tablinks');

    tabLinks.forEach((tabLink) => {
      tabLink.addEventListener('click', (e) => {
        const contentName = e.target.dataset.target;

        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active2");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.querySelector(contentName).style.display = "block";
        e.target.classList.add('active2');
      })
    })

    document.querySelector('#defaultOpen').click();
  }
}
