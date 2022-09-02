// custom select

const element = document.querySelector('#broadcasts__select');
const choices = new Choices(element, {
  searchEnabled: false,
  sorter: () => {},
  itemSelectText: '',

});
