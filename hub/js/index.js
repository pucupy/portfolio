Yapily.onReady = () => {
  Yapily.Accordion.init();
  Yapily.DropdownSearch.init();
  Yapily.Modal.init();
  Yapily.Password.init();
  Yapily.SearchTable.init();
  Yapily.Select.init();
  Yapily.SortTable.init();
  Yapily.Tabs.init();
  Yapily.Toast.init();
}

window.addEventListener('DOMContentLoaded', () => {
  Yapily.onReady();
})
